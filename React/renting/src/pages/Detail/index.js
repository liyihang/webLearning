import React from "react";
import { Flex, Carousel } from "antd-mobile";
import { http } from "../utils/http";
import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar";
import HousePackage from "../../components/HouseProvided";
import HouseItem from "../../components/HouseItem";
import { BASE_URL } from "../utils/url";
const { label } = JSON.parse(localStorage.getItem("bkzf"));
const BMap = window.BMap
const labelStyle = {
  position: "absolute",
  zIndex: -7982820,
  backgroundColor: "rgb(238, 93, 91)",
  color: "rgb(255, 255, 255)",
  height: 25,
  padding: "5px 10px",
  lineHeight: "14px",
  borderRadius: 3,
  boxShadow: "rgb(204, 204, 204) 2px 2px 2px",
  whiteSpace: "nowrap",
  fontSize: 12,
  userSelect: "none",
};
export default class Detail extends React.Component {
  state = {
    houseInfo: {
      houseImg: [],
      title: "",
      tags: [],
      price: 0,
      roomType: "",
      size: 0,
      oritent: [],
      floor: 0,
      community: "",
      coord: {
        longitude: "",
        latitude: "",
      },
      supporting: [],
      houseCode: "",
      description: "",
    },
  };
  //   获取房屋详细信息
  async getHouseDetail() {
    const { id } = this.props.match.params;
    const res = await http.get(`/houses/${id}`);
    this.setState({
      houseInfo: res.data.body,
    });
    const { community, coord } = res.data.body;

    // 渲染地图
    this.renderMap(community, coord);
  }
  componentDidMount() {
    this.getHouseDetail();
    // simulate img loading
  }
  //   renderMap
  renderMap(community, coord) {
    const { longitude, latitude } = coord;
    const map = new BMap.Map("map");
    const point = new BMap.Point(longitude, latitude);
    map.centerAndZoom(point, 17);
    const label = new BMap.Label("", {
      position: point,
      offset: new BMap.Size(0, -36),
    });
    label.setStyle(labelStyle);
    label.setContent(`
      <span>${community}</span>
      <div class="${styles.mapArrow}"></div>
    `);
    map.addOverlay(label);
  }
  //   render swiper
  renderSwiper() {
    const {
      houseInfo: { houseImg },
    } = this.state;
    console.log(this.state);
    return houseImg.map((item) => (
      <a
        key={item.id}
        href="http://www.zfyg.com"
        style={{
          display: "inline-block",
          width: "100%",
          height: 212,
        }}
      >
        <img
          src={BASE_URL + item}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event("resize"));
            this.setState({ imgHeight: "auto" });
          }}
        />
      </a>
    ));
  }
  render() {
    const {
      houseInfo: { community, title, tags, price, roomType, size },
    } = this.state;
    return (
      <div>
        {/*  */}
        <Flex className={styles.header}>
          <i
            className="iconfont icon-back"
            onClick={() => this.props.history.go(-1)}
          ></i>
          <SearchBar curCity={label} className={styles.searchbar}></SearchBar>
        </Flex>
        {/* 轮播 */}
        <Carousel autoplay={false} infinite>
          {/* swiper */}
          {this.renderSwiper()}
        </Carousel>
        {/* 房屋信息 */}
        <div className={styles.detail}>
          <div className={styles.title}>
            <div className={styles.houseinfo}>{title}</div>
            {/* {tags.map(item=> */}
            <p className={styles.advantage}>{tags.join(" ")}</p>
            {/* )} */}
          </div>
          <div className={styles.detailinfo}>
            <div className={styles.item}>
              <p>{price}元/月</p>
              <p>租金</p>
            </div>
            <div className={styles.item}>
              <p>{roomType}</p>
              <p>房型</p>
            </div>
            <div className={styles.item}>
              <p>{size}平</p>
              <p>面积</p>
            </div>
          </div>
          {/* location */}

          {/* 地图位置 */}
          <div className={styles.map}>
            <div className={styles.mapTitle}>
              小区：
              <span>{community}</span>
            </div>
            <div className={styles.mapContainer} id="map">
              地图
            </div>
          </div>
          {/* 配套设置 provided */}
          <div className={styles.provided}></div>
          <HousePackage
            list={[
              "电视",
              "冰箱",
              "洗衣机",
              "空调",
              "热水器",
              "沙发",
              "衣柜",
              "天然气",
            ]}
          ></HousePackage>
          {/* 房源概况 Profile */}
          <div className={styles.profile}>
            <h3>李女士</h3>
            <div className={styles.profileContent}>
              1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
              2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
              3.人车分流，环境优美。
              4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
            </div>
          </div>
        </div>
        <div className={styles.reconmend}>{/* <HouseItem></HouseItem> */}</div>
      </div>
    );
  }
}
