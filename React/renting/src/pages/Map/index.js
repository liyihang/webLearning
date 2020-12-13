import React from "react";
import NavHeader from "../../components/NavHeader";

import "./index.css";
import { Toast } from "antd-mobile";

import { BASE_URL } from "../../utils/url";
import {http} from '../../utils/http'
const BMap = window.BMap;

// 覆盖物样式
const labelStyle = {
  cursor: "pointer",
  border: "0px solid rgb(255, 0, 0)",
  padding: "0px",
  whiteSpace: "nowrap",
  fontSize: "12px",
  color: "rgb(255, 255, 255)",
  textAlign: "center",
};
export default class Map extends React.Component {
  state = {
    houseList: [],
    isShow: false,
  };
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
    Toast.loading("加载中……", 0, null, false);
    const res = await http.get(`/area/map?id=${id}`);
    Toast.hide();
    const data = res.data.body;
    const { nextZoom, type } = this.getTypeAndZoom();
    data.forEach((item) => {
      // 创建覆盖物
      this.createOverlays(item, nextZoom, type);
    });
  }
  renderHouseList() {
    if (this.state.isShow) {
      return (
        <div className="wrap">
          <div className="house">
            <h2 className="housedetail">房源列表</h2>
            <p className="morehouse">更多房源</p>
          </div>
          <div className="houselist">
            <ul>
              {this.state.houseList.map((item) => (
                <li className="houseitem" key={item.houseCode}>
                  <img
                    className="houseimg"
                    src={BASE_URL + item.houseImg}
                    alt="123"
                  />
                  <div className="itemdetail">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  // 获取地图缩放层级和类型
  getTypeAndZoom() {
    // 当前缩放级别
    const zoom = this.map.getZoom();
    let nextZoom, type;
    if (zoom >= 10 && zoom < 12) {
      // 区级
      nextZoom = 13;
      type = "circle";
    } else if (zoom >= 12 && zoom < 14) {
      // 镇级
      nextZoom = 15;
      type = "circle";
    } else if (zoom >= 14 && zoom < 16) {
      // 小区级别
      type = "rect";
    }
    return { nextZoom, type };
  }
  // 获取某一小区的房源信息
  async getHouseList(id) {
    Toast.loading("加载中……", 0, null, false);
    const res = await http.get(`/houses?cityId=${id}`);
    Toast.hide();
    this.setState({
      houseList: res.data.body.list,
      isShow: true,
    });
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
    const areaPoint = new BMap.Point(longitude, latitude);
    // 判断区域类型
    if (type === "circle") {
      this.createCircle(areaPoint, areaName, count, value, zoom);
    } else {
      this.createRect(areaPoint, areaName, count, value);
    }
  }
  // 创建圆形渲染覆盖物
  createCircle(point, name, count, id, zoom) {
    const label = new BMap.Label("", {
      position: point,
      offSet: new BMap.Size(-35, -35),
    });
    // 设置覆盖物id
    label.id = id;
    // 设置覆盖物内容;
    label.setContent(
      `<div class="buddle">
      <p class="content">${name}</p>
      <p>${count}套</p>
    </div>`
    );
    // 设置覆盖物样式
    label.setStyle(labelStyle);
    // 点击事件
    label.addEventListener("click", () => {
      this.renderOverlays(id);
      // 点击放大地图
      this.map.centerAndZoom(point, zoom);
      // 清除覆盖物
      setTimeout(() => {
        //fix baidu map VM104036:1 Uncaught TypeError: Cannot read property 'M' of null at HTMLLabelElement.eval (eval at RZ
        this.map.clearOverlays();
      }, 0);
    });
    this.map.addOverlay(label);
  }
  // 创建普通覆盖物
  createRect(point, name, count, id) {
    const label = new BMap.Label("", {
      position: point,
      offSet: new BMap.Size(-50, -28),
    });
    // 设置覆盖物id
    label.id = id;
    // 设置覆盖物内容;
    label.setContent(
      `<div class="rect">
      <p class="housename">${name}</p>
      <p class="housenum">${count}</p>
      <i class="arrow"></i>
      </div>`
    );
    // 设置覆盖物样式
    label.setStyle(labelStyle);
    // 点击事件
    label.addEventListener("click", (e) => {
      this.getHouseList(id);
      // 点击小区，展示小区房源的同时，把小区坐标移动到地图中心
      const pos = e.changedTouches[0];
      this.map.panBy(
        window.innerWidth / 2 - pos.clientX,
        (window.innerHeight - 330) / 2 - pos.clientY
      );
    });
    this.map.addOverlay(label);
  }
  render() {
    return (
      <div className="map">
        <NavHeader>城市地图</NavHeader>
        <div id="container"></div>

        {this.renderHouseList()}

      </div>
    );
  }
}
