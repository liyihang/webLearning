import React from "react";
import styles from "./index.module.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// const {Header,Content,Footer} = Layout
import LogoImg from "../../assets/img/logo.png";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  onFinish = (values) => {
    const { username, password } = values;
    this.setState({
      username,
      password,
    });
  };
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.loginbox}>
          <div>
            <img src={LogoImg} className={styles.img} alt="" />
            <h1 className={styles.title}>智慧物业系统</h1>
          </div>
          <div className={styles.loginform}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              size="middle"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  className={styles.inputitem}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  className={styles.inputitem}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/login">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="/register">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
