import React from "react";
import Axios from "axios";

// 导入样式

import "./index.css";
// 导入轮播组件
import { Carousel, Flex, Grid, Icon, WingBlank } from "antd-mobile";

// 导入图片
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";

// nav 导航数据
const navItems = [
  {
    id: 1,
    title: "整租",
    imgSrc: Nav1,
    path: "/home/houselist",
  },
  {
    id: 2,
    title: "合租",
    imgSrc: Nav2,
    path: "/home/sharerome",
  },
  {
    id: 3,
    title: "地图找房",
    imgSrc: Nav3,
    path: "/map",
  },
  {
    id: 4,
    title: "出租",
    imgSrc: Nav4,
    path: "renting",
  },
];
// grid data
// const data = Array.from(new Array(40)).map((_val, i) => ({
//   icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
//   text: `name${i}`,
// }));
export default class Index extends React.Component {
  state = {
    swiper: [],
    isSwiperLoaded: false,
    recommendData: [],
    recommendHouse: [],
    LocalCity: "成都",
  };

  //   获取轮播图数据
  async getSwiper() {
    const res = await Axios.get("http://localhost:8080/home/swiper");
    this.setState({
      swiper: res.data.body,
      isSwiperLoaded: true,
    });
  }
  //   获取推荐的信息
  async getRecommendData() {
    const res = await Axios.get(
      "http://localhost:8080/home/groups?area=AREA%7C88cff55c-aaa4-e2e0"
    );
    this.setState({
      recommendData: res.data.body,
    });
  }
  //   获取推荐房源
  async getRecommendHouse() {
    const recHouse = await Axios.get(
      "http://localhost:8080/home/news?area=AREA%7C88cff55c-aaa4-e2e0"
    );

    this.setState({
      recommendHouse: recHouse.data.body,
    });
  }

  //轮播处理
  renderSwiper() {
    return this.state.swiper.map((item) => (
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
          src={`http://localhost:8080${item.imgSrc}`}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event("resize"));
            // this.setState({ imgHeight: "auto" });
          }}
        />
      </a>
    ));
  }
  // 导航处理
  renderNav() {
    return navItems.map((item) => (
      <Flex.Item
        key={item.id}
        onClick={() => this.props.history.push(item.path)}
      >
        <img src={item.imgSrc} alt="dtzf"></img>
        <h2>{item.title}</h2>
      </Flex.Item>
    ));
  }
  // 推荐房源渲染
  renderRecommendHouse() {
    return this.state.recommendHouse.map((item) => (
      <div key={item.id}>
        <div className="houseinfo-item">
          <img
            className="imgIcon"
            src={`http://localhost:8080${item.imgSrc}`}
            alt=""
          ></img>
          <div className="house-content">
            <h2>{item.title}</h2>
            <p>{item.from}</p>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    ));
  }
  componentDidMount() {
    this.getSwiper();
    this.getRecommendData();
    this.getRecommendHouse();
    // 地理位置信息

    const myCity = new window.BMap.LocalCity();
    myCity.get(async (res) => {
      const result = await Axios.get(
        `http://localhost:8080/area/info?name=${res.name}`
      );
      this.setState({
        LocalCity: result.data.body.label,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="swiper">
          {/* 轮播图 */}
          {this.state.isSwiperLoaded ? (
            <Carousel autoplay={true} infinite={true}>
              {this.renderSwiper()}
            </Carousel>
          ) : (
            ""
          )}
        </div>
        {/* 导航 */}
        {/* 顶部导航 */}
        <Flex className="search-area">
          <Flex className="main">
            <div
              className="search"
              onClick={() => this.props.history.push("/citylist")}
            >
              <span>{this.state.LocalCity}</span>
              <i className="iconfont icon-arrow"></i>
            </div>
            <div
              className="search-content"
              onClick={() => this.props.history.push("/search")}
            >
              <i className="iconfont icon-seach"></i>
              <span className="search-text">请输入搜索内容</span>
            </div>
          </Flex>
          <i
            className="iconfont icon-map"
            onClick={() => this.props.history.push("/map")}
          ></i>
        </Flex>
        <Flex className="nav">{this.renderNav()}</Flex>
        {/* 推荐小组 */}
        <div className="recommend">
          <h3 className="title">
            好房推荐<span className="more">更多</span>
          </h3>
          {/* grid 推荐 */}
          <Grid
            data={this.state.recommendData}
            activeStyle
            square={false}
            columnNum={2}
            hasLine={false}
            renderItem={(item) => (
              <Flex className="rec-item" justify="around" key={item.id}>
                <div className="rec-title">
                  <p>{item.title}</p>
                  <span>{item.desc}</span>
                </div>
                <img src={`http://localhost:8080${item.imgSrc}`} alt=""></img>
              </Flex>
            )}
          />
        </div>
        {/* 推荐房源 */}
        <div className="houseinfo">
          <h2>推荐房源</h2>
          <WingBlank size="md">{this.renderRecommendHouse()}</WingBlank>
        </div>
      </div>
    );
  }
}
