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
          // 设置地图覆盖物
          const opts = {
            position: point,
            offSet: new BMap.Size(-35, -35),
          };
          // 发送请求获取所在区域房源数据
          const res = await Axios.get(
            `http://localhost:8080/area/map?id=${value}`
          );
          res.data.body.forEach((item) => {
            const {
              coord: { longitude, latitude },
              label: areaName,
              count,
              value,
            } = item;
            // 设置label
            const areaPoint = new BMap.Point(longitude, latitude);
            const label = new BMap.Label("", {
              position: areaPoint,
              offSet: new BMap.Size(-35, -35),
            });
            // 设置覆盖物id
            label.id = value;
            // 设置覆盖物内容;
            label.setContent(
              `<div class="buddle">
              <p class="content">${areaName}</p>
              <p>${count}套</p>
            </div>`
            );
            // 设置覆盖物样式
            label.setStyle({
              color: "red",
            });
            // 点击事件
            label.addEventListener("click", () => {
              console.log("此处房子卖完了", label.id);
              // 点击放大地图
              map.centerAndZoom(areaPoint, 13);
              // 清除覆盖物
              setTimeout(() => {
                //fix baidu map VM104036:1 Uncaught TypeError: Cannot read property 'M' of null at HTMLLabelElement.eval (eval at RZ
                map.clearOverlays();
              }, 0);
            });
            map.addOverlay(label);
          });
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
