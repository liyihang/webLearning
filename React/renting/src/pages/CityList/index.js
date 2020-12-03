import React from "react";
import { NavBar } from "antd-mobile";
import "./index.css";
import Axios from "axios";

export default class CityList extends React.Component {
  // 获取城市数据
  async getCityName() {
    const cityData = await Axios.get("http://localhost:8080/area/city?level=1");
    console.log(cityData);
  }

  componentDidMount(){
      this.getCityName()
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
