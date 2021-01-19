import React from "react";
// import styles from "./index.module.css";

// import { Form, Input, Button, Checkbox } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";

// const {Header,Content,Footer} = Layout


export default class Baseinfo extends React.Component {
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
      <div>
        
         Jichu xinxi
        
      </div>
    );
  }
}
