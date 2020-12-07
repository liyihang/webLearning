import React from "react";
import NavHeader from "../../components/NavHeader";

import "./index.css";


export default class Map extends React.Component {
  componentDidMount() {
    // 获取当前城市
    const { label, value } = JSON.parse(localStorage.getItem("bkzf"));
    //   初始化map实例
    const map = new window.BMap.Map("container");
    // 地址解析

    const myGeo = new window.BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      label,
      (point) => {
        if (point) {
          map.centerAndZoom(point, 11);
          // map.addOverlay(new window.BMap.Marker(point))
          // 图层控件
          map.addControl(new window.BMap.NavigationControl());
          map.addControl(new window.BMap.ScaleControl());
          
        } else {
          alert("您选择的地址没有解析到结果！");
        }
      },
      label
    );

    // 设置中心坐标
    // const point = new window.BMap.Point(116.404, 39.915)
    // 地图初始化，同时设置地图展示级别
    // map.centerAndZoom(point, 15);
  }
  render() {
    return (
      <div className="map">
        <NavHeader>城市地图</NavHeader>
        <div id="container"></div>
      </div>
    );
  }
}
