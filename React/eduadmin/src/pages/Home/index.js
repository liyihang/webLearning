import React from "react";
import styles from "./index.module.css";

import { Row, Col } from "antd";
import {ToolOutlined,TransactionOutlined,KeyOutlined} from '@ant-design/icons'


export default class Home extends React.Component {
  render() {
    const style = { background: "#0092ff", padding: "0" };
    return (
      <div>
        <h1>管理小区信息概览</h1>
        <Row gutter={16}>
          <div className={styles.overview}>管理小区数：99</div>
          <div className={styles.overview}>房屋总数：999</div>
          <div className={styles.overview}>租房总数：9999</div>
          <div className={styles.overview}>车位总数：9999</div>
          <div className={styles.overview}>商铺数量：9999</div>
          <div className={styles.overview}>总栋数：100</div>
        </Row>
        <h1>住户信息统计</h1>
        <Row gutter={16}>
          <Col className="gutter-row" span={4}>
            <div className={styles.left}>
              <div className={styles.leftoverview}> <ToolOutlined />故障报修</div>
              <div className={styles.leftoverview}><KeyOutlined />房屋租赁</div>
              <div className={styles.leftoverview}><TransactionOutlined />费用缴纳</div>
            </div>
          </Col>
          <Col className="gutter-row" span={20}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    );
  }
}
