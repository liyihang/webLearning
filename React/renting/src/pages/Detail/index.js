import React from "react";
import { Flex, Carousel } from "antd-mobile";

import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar";

const { label } = JSON.parse(localStorage.getItem("bkzf"));
export default class Detail extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI",
        ],
      });
    }, 100);
  }
  render() {
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
          {this.state.data.map((val) => (
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}
