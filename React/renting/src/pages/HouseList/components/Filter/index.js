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
  onCancel = (type) => {
    const { titleSelectedStatus, selectTitle } = this.state;

    // 新的标题选中状态
    const newTitleStatus = { ...titleSelectedStatus };
    const selectValue = selectTitle[type];
    if (
      type === "area" &&
      (selectValue.length !== 2 || selectValue[0] !== "area")
    ) {
      newTitleStatus[type] = true;
    } else if (type === "mode" && selectValue[0] !== "null") {
      newTitleStatus[type] = true;
    } else if (type === "price" && selectValue[0] !== "null") {
      newTitleStatus[type] = true;
    } else if (type === "more" && selectValue.length !== 0) {
      // todo
      newTitleStatus[type] = true;
    } else {
      newTitleStatus[type] = false;
    }
    this.setState({
      openType: "",
      titleSelectedStatus: newTitleStatus,
    });
  };
  //点击确定 隐藏对话框
  onSave = (type, value) => {
    const { titleSelectedStatus } = this.state;

    // 新的标题选中状态
    const newTitleStatus = { ...titleSelectedStatus };
    const selectValue = value;
    if (
      type === "area" &&
      (selectValue.length !== 2 || selectValue[0] !== "area")
    ) {
      newTitleStatus[type] = true;
    } else if (type === "mode" && selectValue[0] !== "null") {
      newTitleStatus[type] = true;
    } else if (type === "price" && selectValue[0] !== "null") {
      newTitleStatus[type] = true;
    } else if (type === "more" && selectValue.length !== 0) {
      // todo
      newTitleStatus[type] = true;
    } else {
      newTitleStatus[type] = false;
    }
    // 获取数据参数
    const newSelectedValue = {
      ...this.state.selectTitle,
      [type]: value,
    };
    // 区域参数
    const { area, mode, price, more } = newSelectedValue;
    // 参数对象
    const params = {};
    const areaKey = area[0];
    let areaValue = "null";
    // area有参数
    if (area.length === 3) {
      areaValue = area[2] !== "null" ? area[2] : area[1];
    }
    params[areaKey] = areaValue;

    // 出租方式和租金
    params[mode] = mode[0];
    params[price] = price[0];
    params[more] = more.join(",");
   console.log(params)
    // 参数传递给父组件
    this.props.onFilter(params);
    this.setState({
      openType: "",
      titleSelectedStatus: newTitleStatus,
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
      } else if (key === "more" && selectValue.length !== 0) {
        // todo
        newTitleStatus[key] = true;
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
      selectTitle,
      titleData: { roomType, oriented, floor, characteristic },
    } = this.state;
    if (openType !== "more") {
      return null;
    }
    const data = { roomType, oriented, floor, characteristic };
    const defaultValue = selectTitle.more;
    return (
      <FilterMore
        data={data}
        type={openType}
        onSave={this.onSave}
        onCancel={this.onCancel}
        defaultValue={defaultValue}
      />
    );
  }
  render() {
    const { titleSelectedStatus, openType } = this.state;
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {/* <div className={styles.mask} /> */}
        {openType === "area" || openType === "mode" || openType === "price" ? (
          <div
            className={styles.mask}
            onClick={() => this.onCancel(openType)}
          />
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
