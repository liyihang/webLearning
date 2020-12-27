import React from "react";
import { Grid } from "antd-mobile";
import styles from "./index.module.css";
import Img from '../../assets/images/avatar.png'
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`,
}));
export default class User extends React.Component {
  render() {
    return (
      <div>
        {/* 用户信息 */}
        <div className={styles.profile}>
          <img className={styles.avatar} src={Img} alt="" title="用户头像" />
        </div>
        {/*grid  */}
        <div>
          <Grid data={data} columnNum={3} />
        </div>
      </div>
    );
  }
}
