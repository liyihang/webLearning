import React, { Component } from "react";

import FilterTitle from "../FilterTitle";
import FilterPicker from "../FilterPicker";
import FilterMore from "../FilterMore";

import styles from "./index.module.css";

// 组件高亮状态

const titleSelectedStatus = {
  area: false,
  mode: false,
  price: false,
  more: false,
};

export default class Filter extends Component {
  state = {
    titleSelectedStatus,
    openType: "",
  };

  //点击取消 隐藏对话框
  onCancel =()=>{
    this.setState({
      openType:''
    })
  }
   //点击确定 隐藏对话框
   onSave =()=>{
    this.setState({
      openType:''
    })
  }
  // 点击筛选标题  改变状态
  titleClick = (type) => {
    this.setState((prevState) => {
      return {
        titleSelectedStatus: {
          ...prevState.titleSelectedStatus,
          [type]: true,
        },
        openType: type,
      };
    });
  };
  render() {
    const { titleSelectedStatus,openType } = this.state;
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {/* <div className={styles.mask} /> */}
        {openType === "area" || openType === "mode" || openType === "price" ? (
          <div className={styles.mask} onClick={this.onCancel}/>
        ) : null}

        <div className={styles.content}>
          {/* 标题栏 */}
          <FilterTitle
            titleSelectedStatus={titleSelectedStatus}
            onClick={this.titleClick}
          />

          {/* 前三个菜单对应的内容： */}
          {openType === "area" ||
          openType === "mode" ||
          openType === "price" ? (
            <FilterPicker onCancel={this.onCancel} onSave={this.onSave}/>
          ) : null}
          {/* <FilterPicker /> */}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    );
  }
}
