import React from "react";
import { NavBar } from "antd-mobile";
import "./index.css";
import Axios from "axios";
import { List, AutoSizer } from "react-virtualized";

import { getCurrentCity } from "../../utils";
// 格式化城市数据
const formatCityData = (list) => {
  const cityData = {};
  //   遍历获取的城市数据
  list.forEach((item) => {
    //   获取城市的首字母
    const initials = item.short.substr(0, 1);
    if (cityData[initials]) {
      cityData[initials].push(item);
    } else {
      cityData[initials] = [item];
    }
  });
  const cityIndex = Object.keys(cityData).sort();
  return { cityData, cityIndex };
};
// react-virtualized
const TITLE_HEIGHT = 36;
const CITY_HEIGHT = 50;
export default class CityList extends React.Component {
  state = {
    cityData: {},
    cityIndex: [],
  };
  // 获取城市数据
  async getCityName() {
    const cityres = await Axios.get("http://localhost:8080/area/city?level=1");

    const { cityData, cityIndex } = formatCityData(cityres.data.body);
    // 获取热门城市信息
    const hotCity = await Axios.get("http://localhost:8080/area/hot");

    cityData["hot"] = hotCity.data.body;
    cityIndex.unshift("hot");
    const currentCity = await getCurrentCity();

    // 当前城市
    cityData["#"] = [currentCity];
    cityIndex.unshift("#");
    this.setState({
      cityData: cityData,
      cityIndex: cityIndex,
    });
  }
  // 处理城市索引名称
  formatIndex = (letter) => {
    switch (letter) {
      case "#":
        return "当前城市";
      case "hot":
        return "热门城市";
      default:
        return letter.toUpperCase();
    }
  };
  //   高度获取
  getHeight = ({ index }) => {
    //   每个字母下城市数量高度
    // TITLE_HEIGHT+城市数量*CITY_HEIGHT
    const { cityData, cityIndex } = this.state;
    console.log(index);
    return TITLE_HEIGHT + cityData[cityIndex[index]].length * CITY_HEIGHT;
  };
  componentDidMount() {
    this.getCityName();
  }

  //
  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    const { cityIndex, cityData } = this.state;
    const letter = cityIndex[index];

    return (
      <div key={key} style={style} className="city">
        <div className="citytitle">{this.formatIndex(letter)}</div>
        {cityData[letter].map((item) => (
          <div className="cityname" key={item.value}>
            {item.label}
          </div>
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className="citylist">
        <NavBar
          className="navbar"
          mode="light"
          icon={<i className="iconfont icon-back" />}
          onLeftClick={() => this.props.history.go(-1)}
        >
          城市选择
        </NavBar>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowCount={this.state.cityIndex.length}
              rowHeight={this.getHeight}
              rowRenderer={this.rowRenderer}
            />
          )}
        </AutoSizer>
        <ul className="cityIndex">
            <li className="cityItem">
                <span>#</span>
            </li>
        </ul>
      </div>
    );
  }
}
