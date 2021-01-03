import React from "react";
import { Flex, Carousel, Modal, Toast } from "antd-mobile";
import { http } from "../utils/http";
import styles from "./index.module.css";
import NavHeader from "../../components/NavHeader";
import HousePackage from "../../components/HouseProvided";
import HouseItem from "../../components/HouseItem";
import { BASE_URL } from "../utils/url";
import { isAuth } from "../utils/auth";
const { label } = JSON.parse(localStorage.getItem("bkzf"));
const recommendHouses = [
  {
    id: 1,
    src: BASE_URL + "/img/message/1.png",
    desc: "72.32㎡/南 北/低楼层",
    title: "安贞西里 3室1厅",
    price: 4500,
    tags: ["随时看房"],
  },
  {
    id: 2,
    src: BASE_URL + "/img/message/2.png",
    desc: "83㎡/南/高楼层",
    title: "天居园 2室1厅",
    price: 7200,
    tags: ["近地铁"],
  },
  {
    id: 3,
    src: BASE_URL + "/img/message/3.png",
    desc: "52㎡/西南/低楼层",
    title: "角门甲4号院 1室1厅",
    price: 4300,
    tags: ["集中供暖"],
  },
];
const BMap = window.BMap;
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
const alert = Modal.alert;
export default class Detail extends React.Component {
  state = {
    // 是否收藏
    isFavorite: false,
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
  // 检查房源是否收藏
  async checkFavorite() {
    const isLogin = isAuth();
    if (!isLogin) {
      return;
    }
    // 获取房源信息
    const { id } = this.props.match.params;
    const res = await http.get(`/user/favorite/${id}`);
    const { status, body } = res.data;
    if (status === 200) {
      this.setState({
        isFavorite: body.isFavorite,
      });
    }
  }
  // 处理房源是否收藏
  handleFavorite = async () => {
    const isLogin = isAuth();
    const { history, location, match } = this.props;
    if (!isLogin) {
      alert("提示", "登录后才能操作，确定登录吗???", [
        { text: "取消" },
        {
          text: "确认",
          onPress: () => history.push("/login", { from: location }),
        },
      ]);
    }
    const { isFavorite } = this.state;
    const { id } = match.params;
    // 已经收藏取消收藏
    if (isFavorite) {
      const res = await http.delete(`/user/favorites/${id}`);
      this.setState({
        isFavorite: false,
      });
      if (res.data.status === 200) {
        Toast.info("已取消收藏", 1, null, false);
      } else {
        Toast.info("登录超时", 1, null, false);
      }
      // 未收藏，点击收藏
    } else {
      const res = await http.post(`/user/favorites/${id}`);
      if (res.data.status === 200) {
        Toast.info("已收藏", 1, null, false);
        this.setState({
          isFavorite: true,
        });
      } else {
        Toast.info("登录超时", 1, null, false);
      }
    }
  };
  componentDidMount() {
    this.getHouseDetail();
    // simulate img loading
    this.checkFavorite();
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
      houseInfo: {
        community,
        title,
        tags,
        price,
        roomType,
        size,
        supporting,
        description,
      },
      isFavorite,
    } = this.state;
    return (
      <div>
        {/*  */}
        <Flex className={styles.header}>
          <NavHeader curCity={label} className={styles.searchbar}>
            {community}
          </NavHeader>
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
          {supporting.length === 0 ? (
            <div className={styles.titleEmpty}>暂无数据</div>
          ) : (
            <HousePackage list={supporting} />
          )}
          {/* 房源概况 Profile */}
          <div className={styles.profile}>
            <h3>李女士</h3>
            <div className={styles.profileContent}>
              {description || "暂无房屋描述"}
            </div>
          </div>
        </div>
        {/* 推荐 */}
        <div className={styles.recommend}>
          <div className={styles.houseTitle}>猜你喜欢</div>
          <div className={styles.items}>
            {recommendHouses.map((item) => (
              <HouseItem {...item} key={item.id} />
            ))}
          </div>
        </div>
        {/* 底部收藏按钮 */}
        <Flex className={styles.fixedBottom}>
          <Flex.Item onClick={this.handleFavorite}>
            <img
              src={
                BASE_URL + (isFavorite ? "/img/star.png" : "/img/unstar.png")
              }
              className={styles.favoriteImg}
              alt="收藏"
            />
            <span className={styles.favorite}>
              {isFavorite ? "已收藏" : "收藏"}
            </span>
          </Flex.Item>
          <Flex.Item>在线咨询</Flex.Item>
          <Flex.Item>
            <a href="tel:400-618-4000" className={styles.telephone}>
              电话预约
            </a>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
