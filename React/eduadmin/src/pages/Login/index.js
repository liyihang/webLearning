import React from "react";
// import {Layout} from 'antd'

// const {Header,Content,Footer} = Layout
import styles from "./index.module.css";
import LogoImg from "../../assets/img/logo.png";

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.loginbox}>
          <div>
            <img src={LogoImg} className={styles.img} alt="" />
            <h1 className={styles.title}>智慧物业系统</h1>
          </div>
          <div className>
            
          </div>
        </div>
      </div>
    );
  }
}
