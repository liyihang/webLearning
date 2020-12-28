import React from "react";
import { Button, Grid } from "antd-mobile";
import styles from "./index.module.css";
import Img from "../../assets/images/avatar.png";
const data = Array.from(new Array(6)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`,
}));
export default class User extends React.Component {
  render() {
    return (
      <div>
        {/* 用户信息 */}
        <div className={styles.profile}></div>
        <div className={styles.userinfo}>
          <img className={styles.avatar} src={Img} alt="" title="用户头像" />
          <Button size="small" inline type="primary">登录</Button>
        </div>
        {/*grid  */}
        <div className={styles.items}>
          <Grid data={data} columnNum={3} />
        </div>
        {/* 推荐 */}
        <h2 className={styles.new}>新房推荐</h2>
        <div className={styles.recommend}>
          <div className={styles.item0}>chuxing</div>
          <div className={styles.item1}>ditie </div>
          <div className={styles.item2}>anju</div>
        </div>
      </div>
    );
  }
}
