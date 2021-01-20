import React from "react";
import styles from "./index.module.css";

import { Row, Col } from "antd";

export default class Home extends React.Component {
  render() {
    const style = { background: "#0092ff", padding: "0" };
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <div className={styles.leftoverview}>故障报修</div>
              <div className={styles.leftoverview}>房屋租赁</div>
              <div className={styles.leftoverview}>费用缴纳</div>
            </div>
          </Col>
          <Col className="gutter-row" span={18}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    );
  }
}
