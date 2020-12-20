import { Flex } from "antd-mobile";
import React from "react";
import SearchBar from "../../components/SearchBar";
import Filter from "./components/Filter";
import styles from "./index.module.css";
import { http } from "../../utils/http";
import HouseItem from "../../components/HouseItem";
import { List,AutoSizer,WindowScroller } from "react-virtualized";
import { BASE_URL } from "../../utils/url";
const { label, value } = JSON.parse(localStorage.getItem("bkzf"));

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
      count
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

    return (
      <HouseItem
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
        {/* 房屋列表 */}
        <div className={styles.houseItems}>
         <WindowScroller>
           {({height,isScrolling,scrollTop})=>(
             <AutoSizer>
               {({width})=>(
                  <List
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
        </div>
      </div>
    );
  }
}
