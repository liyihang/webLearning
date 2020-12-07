import React from "react";
import NavHeader from "../../components/NavHeader";

import "./index.css";
const BMap = window.BMap;
export default class Map extends React.Component {
  componentDidMount() {
    this.initMap();
  }

  // 地图信息
  initMap() {
    // 获取当前城市
    const { label, value } = JSON.parse(localStorage.getItem("bkzf"));
    //   初始化map实例
    const map = new BMap.Map("container");
    // 地址解析

    const myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      label,
      (point) => {
        if (point) {
          map.centerAndZoom(point, 11);
          // map.addOverlay(new window.BMap.Marker(point))
          // 图层控件
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl());
          // 设置地图覆盖物
          const opts = {
            position: point,
            offSet: new BMap.Size(-35, -35),
          };
          // 设置label
          const label = new BMap.Label("12312312", opts);
          // 设置覆盖物内容;
          label.setContent(
            `<div class="buddle">
              <p class="content">东城小区</p>
              <p>99套</p>
            </div>`
          );
          // 设置覆盖物样式
          label.setStyle({
            color: "red",
          });
          map.addOverlay(label);
        } else {
          alert("您选择的地址没有解析到结果！");
        }
      },
      label
    );
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
