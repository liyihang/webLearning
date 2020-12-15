import { Flex } from "antd-mobile";
import React from "react";
import SearchBar from "../../components/SearchBar";
import styles from './index.module.css'

const { label } = JSON.parse(localStorage.getItem("bkzf"));

export default class HouseList extends React.Component {
  render() {
    return (
      <div>
        <Flex className={styles.header}>
          <i className="iconfont icon-back" onClick={()=>this.props.history.go(-1)}></i>
          <SearchBar curCity={label} className={styles.searchbar}></SearchBar>
        </Flex>
      </div>
    );
  }
}
