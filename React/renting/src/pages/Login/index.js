import React from "react";
import NavHeader from "../../components/NavHeader";
import { InputItem, Button, WhiteSpace, WingBlank, List } from "antd-mobile";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  getUsername = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <NavHeader>登录页面</NavHeader>
        <WhiteSpace size="xl"></WhiteSpace>
        <WingBlank>
          <form>
            <List>
              <InputItem
                value={username}
                onChange={(val) => this.getUsername("username", val)}
                clear
                placeholder="请输入用户名"
              >
                用户名:
              </InputItem>
              <WhiteSpace size="xl"></WhiteSpace>
              <InputItem
                value={password}
                onChange={(val) => this.getUsername("password", val)}
                clear
                placeholder="click the button below to focus"
              >
                密码:
              </InputItem>
              <WhiteSpace />
              <Button type="primary">登录</Button>
            </List>
          </form>
          <WingBlank className={styles.register}>
            <Link to="/register">还没有账号，去注册</Link>
          </WingBlank>
        </WingBlank>
      </div>
    );
  }
}
