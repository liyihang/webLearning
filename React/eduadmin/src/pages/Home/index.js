import React from "react";
// import styles from "./index.module.css";

import { Row, Col } from "antd";

export default class Baseinfo extends React.Component {
  render() {
    const style = { background: "#0092ff",padding:'8px 0'};
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={16}>
            <div style={style}>col-6</div>
          </Col>
          
        </Row>
      </div>
    );
  }
}
