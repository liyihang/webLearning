import React from "react";
import styles from "./index.module.css";

import { Breadcrumb } from "antd";

export default class DailyManage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/repair">日常管理</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>报修处理</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
