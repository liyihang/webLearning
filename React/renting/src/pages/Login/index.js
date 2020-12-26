import React from "react";

import { InputItem } from "antd-mobile";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
        <InputItem
          clear
          placeholder="auto focus"
          ref={(el) => (this.autoFocusInst = el)}
        >
          标题
        </InputItem>
        <InputItem
          clear
          placeholder="click the button below to focus"
          ref={(el) => (this.inputRef = el)}
        >
          标题
        </InputItem>
        </form>
      </div>
    );
  }
}
