import React from "react";
import { NavBar } from "antd-mobile";
import "./index.css";
import { withRouter } from "react-router-dom";
function NavHeader({ children, history, onLeftClick }) {
  const defaultHandle = () => history.go(-1);
  return (
    <NavBar
      className="navbar"
      mode="light"
      icon={<i className="iconfont icon-back" />}
      onLeftClick={defaultHandle || onLeftClick}
    >
      {children}
    </NavBar>
  );
}
export default withRouter(NavHeader);
