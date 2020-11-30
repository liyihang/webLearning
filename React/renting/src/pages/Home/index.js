import React from "react";
import {TabBar} from 'antd-mobile'

// 引入路由
import { Route } from "react-router-dom";

import News from "../News";
import './index.css'
export default class Home extends React.Component {
    state = {
        selectedTab: 'redTab',
        
      };
  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center",
        }}
      >
        
      </div>
    );
  }
  render() {
    return (
      <div className="home">
        {/* // 路由嵌套 */}
        <Route path="/home/news" component={News}></Route>
      
          <TabBar
            tintColor="#21b97a"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="Life"
              icon={
                <i className="iconfont icon-ind"></i>
              }
              selectedIcon={
                <i className="iconfont icon-ind"></i>
              }
              selected={this.state.selectedTab === "blueTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "blueTab",
                });
              }}
              data-seed="logId"
            >
              {this.renderContent("Life")}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <i className="iconfont icon-findHouse"></i>
              }
              selectedIcon={
                <i className="iconfont icon-findHouse"></i>
              }
              title="找房"
              key="Koubei"
              selected={this.state.selectedTab === "redTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "redTab",
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent("Koubei")}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <i className="iconfont icon-infom"></i>
              }
              selectedIcon={
                <i className="iconfont icon-infom"></i>
              }
              title="资讯"
              key="Friend"
              selected={this.state.selectedTab === "greenTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "greenTab",
                });
              }}
            >
              {this.renderContent("Friend")}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <i className="iconfont icon-myinfo"></i>
               }
              selectedIcon={
                <i className="iconfont icon-myinfo"></i>
              }
              title="我的"
              key="my"
              selected={this.state.selectedTab === "yellowTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "yellowTab",
                });
              }}
            >
              {this.renderContent("My")}
            </TabBar.Item>
          </TabBar>
       
      </div>
    );
  }
}
