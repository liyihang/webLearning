import React, { Component } from "react";

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

import styles from "./index.module.css";
import { http } from "../../../../utils/http";

// 组件高亮状态

const titleSelectedStatus = {
  area: false,
  mode: false,
  price: false,
  more: false,
};

// filtermore  filterpick 选中值

const selectTitle = {
  area: ["area", "null"],
  mode: ["null"],
  price: ["null"],
  more: [],
};

export default class Filter extends Component {
  state = {
    titleSelectedStatus,
    openType: "",
    titleData: {},
    selectTitle,
  };

  componentDidMount() {
    this.getTitleData();
  }
  // 获取筛选栏数据

  async getTitleData() {
    const { value } = JSON.parse(localStorage.getItem("bkzf"));
    const res = await http.get(`/houses/condition?id=${value}`);
    this.setState({
      titleData: res.data.body,
    });
  }

  //点击取消 隐藏对话框
  onCancel = () => {
    this.setState({
      openType: "",
    });
  };
  //点击确定 隐藏对话框
  onSave = (type, value) => {
    console.log(type, value);
    this.setState({
      openType: "",
      selectTitle: {
        ...this.state.selectTitle,
        [type]: value,
      },
    });
  };
  // 点击筛选标题  改变状态
  titleClick = (type) => {
    const { titleSelectedStatus, selectTitle } = this.state;

    // 新的标题选中状态
    const newTitleStatus = { ...titleSelectedStatus };
    // 遍历选中状态
    Object.keys(titleSelectedStatus).forEach((key) => {
      if (key === type) {
        newTitleStatus[type] = true;
        return;
      }
      // 其他标签
      const selectValue = selectTitle[key];
      if (
        key === "area" &&
        (selectValue.length !== 2 || selectValue[0] !== "area")
      ) {
        newTitleStatus[key] = true;
      } else if (key === "mode" && selectValue[0] !== "null") {
        newTitleStatus[key] = true;
      } else if (key === "price" && selectValue[0] !== "null") {
        newTitleStatus[key] = true;
      } else if (key === "more") {
        // todo
      } else {
        newTitleStatus[key] = false;
      }
    });

    this.setState({
      openType: type,
      titleSelectedStatus: newTitleStatus,
    });
  };
  // renderFilterPicker
  renderFilterPicker() {
    const {
      openType,
      titleData: { area, subway, rentType, price },
      selectTitle,
    } = this.state;
    if (openType !== "area" && openType !== "mode" && openType !== "price") {
      return null;
    }
    // 获取筛选数据
    let data = [];
    let cols = 3;
    // console.log(selectTitle)

    let defaultTitle = selectTitle[openType];
    switch (openType) {
      case "area":
        data = [area, subway];
        cols = 3;
        break;
      case "mode":
        data = rentType;
        cols = 1;
        break;
      case "price":
        data = price;
        cols = 1;
        break;
      default:
        break;
    }

    return (
      <FilterPicker
        key={openType}
        onCancel={this.onCancel}
        onSave={this.onSave}
        data={data}
        type={openType}
        cols={cols}
        defaultTitle={defaultTitle}
      />
    );
  }
  // render filterMore
  renderFilterMore() {
    const {
      openType,
      titleData: { roomType, oriented, floor, characteristic },
    } = this.state;
    if (openType !== "more") {
      return null;
    }
    const data = { roomType, oriented, floor, characteristic };
    return <FilterMore data={data}/>;
  }
  render() {
    const { titleSelectedStatus, openType } = this.state;
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {/* <div className={styles.mask} /> */}
        {openType === "area" || openType === "mode" || openType === "price" ? (
          <div className={styles.mask} onClick={this.onCancel} />
        ) : null}

        <div className={styles.content}>
          {/* 标题栏 */}
          <FilterTitle
            titleSelectedStatus={titleSelectedStatus}
            onClick={this.titleClick}
          />

          {/* 前三个菜单对应的内容： */}
          {this.renderFilterPicker()}
          {/* <FilterPicker /> */}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
          {this.renderFilterMore()}
        </div>
      </div>
    );
  }
}
