import { Flex } from "antd-mobile";
import React from "react";
import SearchBar from "../../components/SearchBar";
import Filter from "./components/Filter";
import styles from "./index.module.css";
import { http } from "../../utils/http";
const { label,value } = JSON.parse(localStorage.getItem("bkzf"));

export default class HouseList extends React.Component {
  state = {
    list: [],
    count: 0,
  };

  params = {};

  componentDidMount() {
    this.getSearchData();
  }
  // 筛选数据获取
  async getSearchData() {
    const res = await http.get("/houses", {
      params: {
        cityId: value,
        ...this.filters,
        start: 1,
        end: 20,
      },
    });
    const { list, count } = res.data.body;
    this.setState({
      list,
      count,
    });
  }
  // 接受子组件的数据
  onFilter = (params) => {
    this.filters = params;

    // 调用获取数据方法
    this.getSearchData();
  };
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <Flex className={styles.header}>
          <i
            className="iconfont icon-back"
            onClick={() => this.props.history.go(-1)}
          ></i>
          <SearchBar curCity={label} className={styles.searchbar}></SearchBar>
        </Flex>
        {/* 条件筛选 */}
        <Filter onFilter={this.onFilter}></Filter>
      </div>
    );
  }
}
