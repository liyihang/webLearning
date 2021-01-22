import React, { Component } from "react";

import FilterFooter from "../../../../components/FilterFooter";

import styles from "./index.module.css";

export default class FilterMore extends Component {
  state = {
    selectedTags: this.props.defaultValue,
  };
  // 点击标题高亮
  onTagClick(value) {
    const { selectedTags } = this.state;
    const newSelectedTags = [...selectedTags];
    // 点击tag 如果没有存储在selectedTags中
    if (selectedTags.indexOf(value) <= -1) {
      // 选中的标签不在数组中，添加到数组中
      newSelectedTags.push(value);
    } else {
      // 如果已经高亮了，点击取消高亮
      const index = newSelectedTags.indexOf((item) => item === value);
      newSelectedTags.splice(index, 1);
    }
    this.setState({
      selectedTags: newSelectedTags,
    });
  }
  // 渲染标签
  renderFilters(data) {
    const { selectedTags } = this.state;
    // 高亮类名： styles.tagActive
    return data.map((item) => {
      const isSelected = selectedTags.indexOf(item.value) > -1;
      return (
        <span
          key={item.value}
          // styles.tagActive
          className={[styles.tag, isSelected ? styles.tagActive : ""].join(" ")}
          onClick={() => {
            this.onTagClick(item.value);
          }}
        >
          {item.label}
        </span>
      );
    });
  }
  // 取消选中
  onCancel = () => {
    this.setState({
      selectedTags: [],
    });
  };
  // 确认
  onOk = () => {
    const { type, onSave } = this.props;
    onSave(type, this.state.selectedTags);
  };
  render() {
    const {
      data: { roomType, oriented, floor, characteristic },
      onCancel,type
    } = this.props;
    return (
      <div className={styles.root}>
        {/* 遮罩层 */}
        {/* 点击遮罩层取消 */}
        <div className={styles.mask} onClick={()=>onCancel(type)} />

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
        <FilterFooter
          className={styles.footer}
          cancelText="清除"
          onCancel={this.onCancel}
          onOk={this.onOk}
        />
      </div>
    );
  }
}
