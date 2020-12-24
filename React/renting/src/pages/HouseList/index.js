import { Flex, Toast } from "antd-mobile";
import React from "react";
import SearchBar from "../../components/SearchBar";
import Filter from "./components/Filter";
import styles from "./index.module.css";
import { http } from "../CityList/utils/http";
import HouseItem from "../../components/HouseItem";
import NoHouse from "../../components/NoHouse";

import {
  List,
  AutoSizer,
  WindowScroller,
  InfiniteLoader,
} from "react-virtualized";
import { BASE_URL } from "../CityList/utils/url";
import Sticky from "../../components/Sticky";
const { label, value } = JSON.parse(localStorage.getItem("bkzf"));

export default class HouseList extends React.Component {
  state = {
    list: [],
    count: 0,
    isLoading:false
  };

  params = {};

  componentDidMount() {
    this.getSearchData();
  }
  // 筛选数据获取

  async getSearchData() {
    Toast.loading("数据加载中，请稍等……");
    this.setState({
      isLoading:true
    })
    const res = await http.get("/houses", {
      params: {
        cityId: value,
        ...this.filters,
        start: 1,
        end: 20,
      },
    });
    const { list, count } = res.data.body;
    if (count > 0) {
      Toast.info(`共有${count}套房源`);
    }
    this.setState({
      list,
      count,
      isLoading:false
    });
  }
  // 接受子组件的数据
  onFilter = (params) => {
    this.filters = params;

    // 调用获取数据方法
    this.getSearchData();
  };
  renderHouseList = ({ key, index, style }) => {
    // 根据索引号来获取当前这一行的房屋数据
    const { list } = this.state;
    const house = list[index];
    if (!house) {
      return (
        <div key={key} style={style}>
          <p className={styles.loading}></p>
        </div>
      );
    }
    return (
      <HouseItem
        onClick={()=>this.props.history.push(`/detail/${house.houseCode}`)}
        key={key}
        style={style}
        src={BASE_URL + house.houseImg}
        title={house.title}
        desc={house.desc}
        tags={house.tags}
        price={house.price}
      />
    );
  };
  isRowLoaded = ({ index }) => {
    return !!this.state.list[index];
  };
  loadMoreRows = ({ startIndex, stopIndex }) => {
    return new Promise((resolve) => {
      http
        .get("/houses", {
          params: {
            cityId: value,
            ...this.filters,
            start: startIndex,
            end: stopIndex,
          },
        })
        .then((res) => {
          this.setState({
            list: [...this.state.list, ...res.data.body.list],
          });
          resolve();
        });
    });
  };
  // 房屋列表
  renderHouseItem() {
    const {count,isLoading} = this.state;
    if(count === 0 && !isLoading){
      return <NoHouse></NoHouse>
    }
    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={this.state.count}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ height, isScrolling, scrollTop }) => (
              <AutoSizer>
                {({ width }) => (
                  <List
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    autoHeight
                    width={width}
                    height={height}
                    rowCount={this.state.count} // List列表项的行数
                    rowHeight={120} // 每一行的高度
                    rowRenderer={this.renderHouseList} // 渲染列表项中的每一行
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
    );
  }
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
        <Sticky height={40}>
          {/* 条件筛选 */}
          <Filter onFilter={this.onFilter}></Filter>
        </Sticky>
        {/* 房屋列表 */}
        <div className={styles.houseItems}>{this.renderHouseItem()}</div>
      </div>
    );
  }
}
