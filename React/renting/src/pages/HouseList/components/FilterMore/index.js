import React, { Component } from "react";

import FilterFooter from "../../../../components/FilterFooter";

import styles from "./index.module.css";

export default class FilterMore extends Component {
  state = {
    selectedTags: [],
  };
  // 点击标题高亮
  onTagClick(value) {
    const { selectedTags } = this.state;
    const { newSelectedTags } = { ...selectedTags };
    // 点击tag 如果没有存储在selectedTags中
    if (selectedTags.indexOf(value) <= -1) {
      // 选中的标签不在数组中，添加到数组中
      selectedTags.push(value)
    }else{
      // 如果已经高亮了，点击取消高亮
      const index = newSelectedTags.indexOf(item =>item===value)
      selectedTags.splice(index,1)
    }
  }
  // 渲染标签
  renderFilters(data) {
    // 高亮类名： styles.tagActive
    return data.map((item) => {
      return (
        <span
          key={item.value}
          // styles.tagActive
          className={[styles.tag].join(" ")}
          onClick={() => {
            this.onTagClick(item.value);
          }}
        >
          {item.label}
        </span>
      );
    });
  }

  render() {
    const {
      data: { roomType, oriented, floor, characteristic },
    } = this.props;
    return (
      <div className={styles.root}>
        {/* 遮罩层 */}
        <div className={styles.mask} />

        {/* 条件内容 */}
        <div className={styles.tags}>
          <dl className={styles.dl}>
            <dt className={styles.dt}>户型</dt>
            <dd className={styles.dd}>{this.renderFilters(roomType)}</dd>

            <dt className={styles.dt}>朝向</dt>
            <dd className={styles.dd}>{this.renderFilters(oriented)}</dd>

            <dt className={styles.dt}>楼层</dt>
            <dd className={styles.dd}>{this.renderFilters(floor)}</dd>

            <dt className={styles.dt}>房屋亮点</dt>
            <dd className={styles.dd}>{this.renderFilters(characteristic)}</dd>
          </dl>
        </div>

        {/* 底部按钮 */}
        <FilterFooter className={styles.footer} />
      </div>
    );
  }
}
