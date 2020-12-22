import React, { Component, createRef } from "react";
import styles from "./index.module.css";

class Sticky extends Component {
  // ref 对象
  placeholder = createRef();
  content = createRef();

  //   事件监听函数
  handleScroll = () => {
    //   dom
    const placeholderEl = this.placeholder.current;
    const contentEl = this.content.current;
    const { top } = placeholderEl.getBoundingClientRect();
    if (top < 0) {
      // 吸顶效果
      contentEl.classList.add(styles.fixed);
      placeholderEl.style.height = "40px";
    } else {
      // 取消吸顶功能
      contentEl.classList.remove(styles.fixed);
      placeholderEl.style.height = "0";
    }
  };
  //   监听滚动事件
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div>
        {/* 占位符 */}
        <div ref={this.placeholder}></div>
        {/* 内容元素 */}
        <div ref={this.content}>{this.props.children}</div>
      </div>
    );
  }
}
export default Sticky;
