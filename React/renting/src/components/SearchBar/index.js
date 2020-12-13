import React from "react";
import { withRouter } from "react-router";
import { Flex } from "antd-mobile";
import "./index.css";

import PropTypes from 'prop-types'

function SearchBar({ history, curCity }) {
  return (
    <Flex className="search-area">
      <Flex className="main">
        <div className="search" onClick={() => history.push("/citylist")}>
          <span>{curCity}</span>
          <i className="iconfont icon-arrow"></i>
        </div>
        <div className="search-content" onClick={() => history.push("/search")}>
          <i className="iconfont icon-seach"></i>
          <span className="search-text">请输入搜索内容</span>
        </div>
      </Flex>
      <i className="iconfont icon-map" onClick={() => history.push("/map")}></i>
    </Flex>
  );
}

SearchBar.propTypes={
    curCity:PropTypes.string.isRequired
}
export default withRouter(SearchBar);
