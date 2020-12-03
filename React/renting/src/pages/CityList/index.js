import React from "react";
import { NavBar } from "antd-mobile";
import "./index.css";
import Axios from "axios";

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

export default class CityList extends React.Component {
  // 获取城市数据
  async getCityName() {
    const cityres = await Axios.get("http://localhost:8080/area/city?level=1");

    const { cityData, cityIndex } = formatCityData(cityres.data.body);
    // 获取热门城市信息
    const hotCity = await Axios.get("http://localhost:8080/area/hot");

    cityData["hot"] = hotCity.data.body;
    cityIndex.unshift("hot");
    console.log(cityIndex);
  }

  componentDidMount() {
    this.getCityName();
  }
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
      </div>
    );
  }
}
