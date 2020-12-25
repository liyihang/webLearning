import React from "react";
import HouseImg from "../../assets/images/nohouse.jpeg";
import { BASE_URL } from "../../pages/utils/url";
import styles from "./index.module.css";

const NoHouse = ({ children }) => {
  return (
    <div className={styles.root}>
      <p className={styles.info}>没有更多房源信息，请更换筛选条件……</p>
    </div>
  );
};
export default NoHouse;
