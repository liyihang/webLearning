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
        {/* 房屋信息 */}
        <div className={styles.detail}>
          <div className={styles.title}>
            <div className={styles.houseinfo}>
              整租·梅源里小区 2室1厅 南/北
            </div>
            <p className={styles.advantage}>近地铁</p>
          </div>
          <div className={styles.detailinfo}>
            <div className={styles.item}>
              <p>8500元/月</p>
              <p>租金</p>
            </div>
            <div className={styles.item}>
              <p>一室一厅</p>
              <p>房型</p>
            </div>
            <div className={styles.item}>
              <p>78平</p>
              <p>面积</p>
            </div>
          </div>
          {/* location */}
          <div className={styles.map} id="container">

          </div>
          {/* 配套设置 provided */}
          <div className={styles.provided}>
              <ul>
                  <li><i></i>洗衣机</li>
                  <li><i></i>洗衣机</li>
                  <li><i></i>洗衣机</li>
                  <li><i></i>洗衣机</li>
                  <li><i></i>洗衣机</li>
              </ul>
          </div>
          {/* 房源概况 Profile */}
          <div className={styles.profile}>
              <h3>李女士</h3>
          </div>
        </div>
      </div>
    );
  }
}
