import React from "react";
import { Flex, Carousel } from "antd-mobile";

import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar";
import HousePackage from '../../components/HouseProvided'
import HouseItem from '../../components/HouseItem'
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
            <div className={styles.houseinfo}>整租·梅源里小区 2室1厅 南/北</div>
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

          <div className={styles.maparea}>
              <h3 className={styles.mapinfo}>房源位置</h3>
              <div className={styles.map}></div>
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
        <div className={styles.reconmend}>
            <HouseItem></HouseItem>
        </div>
      </div>
    );
  }
}
