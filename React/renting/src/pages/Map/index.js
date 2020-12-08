import React from "react";
import NavHeader from "../../components/NavHeader";
import Axios from "axios";

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
    // 绑定this，外部可用
    this.map = map;
    // 地址解析

    const myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      label,
      async (point) => {
        if (point) {
          map.centerAndZoom(point, 11);
          // map.addOverlay(new window.BMap.Marker(point))
          // 图层控件
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl());
          this.renderOverlays(value);
        } else {
          alert("您选择的地址没有解析到结果！");
        }
      },
      label
    );
  }
  // 获取数据  渲染
  async renderOverlays(id) {
    const res = await Axios.get(`http://localhost:8080/area/map?id=${id}`);
    const data = res.data.body;
    const { nextZoom, type } = this.getTypeAndZoom();
    data.forEach((item) => {
      // 创建覆盖物
      this.createOverlays(item, nextZoom, type);
    });
  }
  // 获取地图缩放层级和类型
  getTypeAndZoom() {
    // 当前缩放级别
    const zoom = this.map.getZoom();
    let nextZoom, type;
    if (zoom > 10 && zoom < 12) {
      // 区级
      nextZoom = 13;
      type = "circle";
    } else if (zoom > 12 && zoom < 14) {
      // 镇级
      nextZoom = 15;
      type = "circle";
    } else {
      // 小区级别
      type = "rect";
    }
    return { nextZoom, type };
  }

  // 创建覆盖物
  createOverlays(data, zoom, type) {
    // 解构数据
    const {
      coord: { longitude, latitude },
      label: areaName,
      count,
      value,
    } = data;
    // 创建坐标对象
    const areaPoint = BMap.Point(longitude, latitude);
    // 判断区域类型
    if ((type = "circle")) {
      this.createCircle(areaPoint,areaName,count,value,zoom);
    } else {
      this.createRect(areaPoint,areaName,count,value)
    }
  }
  // 创建圆形渲染覆盖物
  createCircle(areaPoint, areaName, count, value, zoom) {}
  // 创建普通覆盖物
  createRect(areaPoint, areaName, count, value) {}
  render() {
    return (
      <div className="map">
        <NavHeader>城市地图</NavHeader>
        <div id="container"></div>
      </div>
    );
  }
}
