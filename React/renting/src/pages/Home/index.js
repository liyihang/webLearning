import React from "react";
import { TabBar } from "antd-mobile";

// 引入路由
import { Route } from "react-router-dom";
// 引入组件
import Index from "../Index";
import User from "../User";
import HouseList from "../HouseList";
import News from "../News";
import "./index.css";
/**
 * 组件数据抽取
 */
const tabBarItems = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home",
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/houselist",
  },
  {
    title: "资讯",
    icon: "icon-infom",
    path: "/home/news",
  },
  {
    title: "我的",
    icon: "icon-myinfo",
    path: "/home/user",
  },
];
export default class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname,
  };
// fix tabbar error
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname,
      });
    }
  }
  /**
   * 组件内容抽取渲染
   */

  renderTabbarItems() {
    return tabBarItems.map((item) => (
      <TabBar.Item
        icon={<i className={`iconfont ${item.icon}`}></i>}
        selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
        title={item.title}
        key={item.title}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path,
          });
          this.props.history.push(item.path);
        }}
      ></TabBar.Item>
    ));
  }
  render() {
    return (
      <div className="home">
        {/* // 路由嵌套 */}
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/user" component={User}></Route>
        <Route path="/home/houselist" component={HouseList}></Route>
        <Route exact path="/home" component={Index}></Route>

        <TabBar tintColor="#21b97a" barTintColor="white" noRenderContent="true">
          {this.renderTabbarItems()}
        </TabBar>
      </div>
    );
  }
}
