import React from "react";
import { NavBar } from "antd-mobile";
import style from  "./index.module.css";
// react 高阶组件
import { withRouter } from "react-router-dom";
// props类型校验
import PropTypes from "prop-types";
function NavHeader({ children, history, onLeftClick }) {
  const defaultHandle = () => history.go(-1);
  return (
    <NavBar
      className={style.navbar}
      mode="light"
      icon={<i className="iconfont icon-back" />}
      onLeftClick={defaultHandle || onLeftClick}
    >
      {children}
    </NavBar>
  );
}
// navheader 组件参数校验
NavHeader.propTypes = {
  children: PropTypes.string.isRequired,
  onLeftClick: PropTypes.func,
};
export default withRouter(NavHeader);
