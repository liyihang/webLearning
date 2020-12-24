import React from "react";
import {Flex} from 'antd-mobile'

import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar";

const { label } = JSON.parse(localStorage.getItem("bkzf"));
export default class Detail extends React.Component {
  render() {
    return (
      <div>
        <Flex className={styles.header}>
          <i
            className="iconfont icon-back"
            onClick={() => this.props.history.go(-1)}
          ></i>
          <SearchBar curCity={label} className={styles.searchbar}></SearchBar>
        </Flex>
      </div>
    );
  }
}
