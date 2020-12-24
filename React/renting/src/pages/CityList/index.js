import React from "react";
import { Toast } from "antd-mobile";
import "./index.css";
import Axios from "axios";
import { List, AutoSizer } from "react-virtualized";

import { getCurrentCity } from "./utils";

import NavHeader from '../../components/NavHeader'
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

// 有房源的城市
const HOUSE_CITY = ["北京", "上海", "深圳", "广州"];
export default class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      cityIndex: [],
      activeIndex: 0,
    };
    this.cityListCompont = React.createRef();
  }
  // 获取点击城市
  getChangeCity = ({ label, value }) => {
    //   如果有数据，将数据存储在localstorage中，并返回
    if (HOUSE_CITY.indexOf(label) > -1) {
      localStorage.setItem("bkzf", JSON.stringify({ label, value }));
      this.props.history.go(-1);
    } else {
      Toast.info("暂无房源信息", 1,null,false);
    }
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
    return TITLE_HEIGHT + cityData[cityIndex[index]].length * CITY_HEIGHT;
  };
  async componentDidMount() {
    await this.getCityName();
    // 解决城市索引定位不准
    this.cityListCompont.current.measureAllRows();
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }
  //   active
  onRowsRendered = ({ startIndex }) => {
    if (this.state.activeIndex !== startIndex) {
      this.setState({
        activeIndex: startIndex,
      });
    }
  };

  //virtualized content render
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
          <div
            className="cityname"
            key={item.value}
            onClick={() => this.getChangeCity(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  };
  //   city index render
  renderIndex() {
    return this.state.cityIndex.map((item, index) => (
      <li
        className="city-item"
        key={item}
        onClick={() => {
          this.cityListCompont.current.scrollToRow(index);
        }}
      >
        <span className={this.state.activeIndex === index ? "city-active" : ""}>
          {item === "hot" ? "热" : item.toUpperCase()}
        </span>
      </li>
    ));
  }
  render() {
    return (
      <div className="citylist">
        <NavHeader
        >
          城市选择
        </NavHeader>
        <AutoSizer>
          {({ width, height }) => (
            <List
              ref={this.cityListCompont}
              width={width}
              height={height}
              rowCount={this.state.cityIndex.length}
              rowHeight={this.getHeight}
              rowRenderer={this.rowRenderer}
              onRowsRendered={this.onRowsRendered}
              scrollToAlignment="start"
            />
          )}
        </AutoSizer>
        <ul className="city-index">{this.renderIndex()}</ul>
      </div>
    );
  }
}
