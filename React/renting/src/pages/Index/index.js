import React from "react";
import Axios from "axios";

// 导入轮播组件
import { Carousel } from "antd-mobile";

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
  //
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

  componentDidMount() {
    this.getSwiper();
  }
  render() {
    return (
      <div>
        <Carousel autoplay={true} infinite={true} autoplayInterval>
          {this.renderSwiper()}
        </Carousel>
      </div>
    );
  }
}
