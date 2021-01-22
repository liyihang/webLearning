import React from "react";
import NavHeader from "../../components/NavHeader";
import {
  InputItem,
  Button,
  WhiteSpace,
  WingBlank,
  List,
  Toast,
} from "antd-mobile";
import { Link } from "react-router-dom";
import { http } from "../utils/http";
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const res = await http.post("/user/login", { username, password });
    const { status, body, description } = res.data;

    if (status === 200) {
      localStorage.setItem("bkzf_token", body.token);
      if (!this.props.location.state) {
        this.props.history.go(-1);
      } else {
        this.props.history.replace(this.props.location.state.from.pathname);
      }
    } else {
      Toast.info(description, 2, null, false);
    }
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
                type="password"
                value={password}
                onChange={(val) => this.getUsername("password", val)}
                clear
                placeholder="请输入密码"
              >
                密码:
              </InputItem>
              <WhiteSpace />
              <Button onClick={this.handleSubmit} type="primary">
                登录
              </Button>
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
