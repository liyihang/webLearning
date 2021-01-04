import React from "react";
import { SearchBar } from "antd-mobile";
import { getCity } from "../../utils/city";
import { http } from "../../utils/http";

export default class RentSearch extends React.Component {
  cityId = getCity().value;
  timeId = null;
  state = {
    value: "",
    searchList: [],
  };
  //  事件处理
  handleInput = (value) => {
    this.setState({
      value: value,
    });
    if (!value) {
      return this.setState({ searchList: [] });
    }
    clearTimeout(this.timeId);
    // 解决抖动问题
    this.timeId = setTimeout(async () => {
      // 发送请求  获取搜索数据
      const res = await http.get("/area/community", {
        params: { name: value, id: this.cityId },
      });
      this.setState({
        searchList: res.data.body,
      });
    }, 500);
  };

  render() {
    const { searchList } = this.state;
    return (
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="请输入小区名称"
          onSubmit={(value) => console.log(value, "onSubmit")}
          onCancel={this.onCancel}
          onChange={this.handleInput}
          showCancelButton={true}
        />
        {searchList.length > 0}
      </div>
    );
  }
}
