import React from "react";
import Axios from "axios";

// 导入轮播组件
import { Carousel, Flex } from "antd-mobile";

// 导入样式

import "./index.css";
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
export default class Index extends React.Component {
  state = {
    swiper: [],
  };

  //   获取轮播图数据
  async getSwiper() {
    const res = await Axios.get("http://localhost:8080/home/swiper");
    this.setState({
      swiper: res.data.body,
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
  componentDidMount() {
    this.getSwiper();
  }
  render() {
    return (
      <div>
        {/* 轮播图 */}
        <Carousel autoplay={true} infinite={true}>
          {this.renderSwiper()}
        </Carousel>
        {/* 导航 */}
        <Flex className="nav">
          {this.renderNav()}
        </Flex>
      </div>
    );
  }
}
