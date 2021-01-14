import React from "react";
import { Button } from "antd";
export default class App extends React.Component {
 
  handleClick=()=>{
    alert('点击了按钮……')
  }
  render() {
    return (
      <Button type="primary" danger onClick={this.handleClick}>点击</Button>
    )
  }
}
