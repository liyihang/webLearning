import React from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LaptopOutlined,
  KeyOutlined,
  CarOutlined,
  HomeOutlined,
  DashboardOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarChartOutlined,
  MessageOutlined,
  MailOutlined
} from "@ant-design/icons";
import styles from "./index.module.css";
export default class Login extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    console.log("object");
    console.log("styles:".styles);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { Header, Content, Sider } = Layout;
    const { SubMenu } = Menu;
    return (
      <div className={styles.container}>
        <Layout style={{ height: "100%" }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">智慧物业V1.0</div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                系统首页
              </Menu.Item>
              <SubMenu key="sub1" icon={<DesktopOutlined />} title="日常管理">
                <Menu.Item key="1">报修处理</Menu.Item>
                <Menu.Item key="2">住户查询</Menu.Item>
                <Menu.Item key="3">业主变更</Menu.Item>
                <Menu.Item key="4">费用支出</Menu.Item>
                <Menu.Item key="4">日常收费</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="基础资料">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<CarOutlined />}
                title="车位管理"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<DashboardOutlined />} title="抄表管理">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" icon={<PayCircleOutlined />} title="收费管理">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub6" icon={<MessageOutlined />} title="微信业务">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub7" icon={<UserOutlined/>} title="租赁管理">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub8" icon={<BarChartOutlined />} title="统计查询">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub9" icon={<MailOutlined />} title="短信管理">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub10" icon={<SettingOutlined />} title="系统设置">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
