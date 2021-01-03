import React from "react";
import { SearchBar } from "antd-mobile";

export default class RentSearch extends React.Component {
  state = {
    value: "请输入小区名称",
  };
  //  事件处理
  onClear = () => {
    this.setState({
        value:''
    })
  };

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={(value) => console.log(value, "onSubmit")}
          onClear={(value) => this.onClear}
          onFocus={() => console.log("onFocus")}
          onBlur={() => console.log("onBlur")}
          onCancel={() => this.onCancel}
          showCancelButton
          onChange={this.onChange}
        />
      </div>
    );
  }
}
