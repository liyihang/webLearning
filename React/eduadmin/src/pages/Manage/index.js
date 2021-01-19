import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LaptopOutlined,
  // KeyOutlined,
  CarOutlined,
  HomeOutlined,
  DashboardOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarChartOutlined,
  // MessageOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import Manage from '../../pages/Manage'
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
                <Link to="/home">系统首页</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<DesktopOutlined />} title="日常管理">
                <Menu.Item key="1">
                  <Link to="/repair">报修处理</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/householdsearch">住户查询</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/householdchange">业主变更</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/expenses">费用支出</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/dailycharge">日常收费</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="基础资料">
                <Menu.Item key="5">
                  <Link to="/communityinfo">小区资料</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/buildingoverview">楼座概览</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/roomoverview">房间概览</Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/householdinfo">住户资料</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<CarOutlined />} title="车位管理">
                <Menu.Item key="9">
                  <Link to="/parkingarea">停车区域</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/parkingmanagement">车位管理</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<DashboardOutlined />} title="抄表管理">
                <Menu.Item key="5"><Link to="/meterreading">抄表录数</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/chargelog">收费记录</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/meterreading">新增仪表</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" icon={<PayCircleOutlined />} title="收费管理">
                <Menu.Item key="5"><Link to="/newcharges">费用新增</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/cost">费用分配</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/meterreading">生成费用</Link></Menu.Item>
              </SubMenu>
              {/* <SubMenu key="sub6" icon={<MessageOutlined />} title="微信业务">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu> */}
              <SubMenu key="sub7" icon={<UserOutlined />} title="租赁管理">
                <Menu.Item key="5"><Link to="/rentalinquiry">租赁查询</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub8" icon={<BarChartOutlined />} title="统计查询">
                <Menu.Item key="5"><Link to="/tanantquery">租户查询</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/payment">缴费查询</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub9" icon={<MailOutlined />} title="短信管理">
                <Menu.Item key="5"><Link to="/messagetemplate">短信模板</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/sendlog">发送记录</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub10" icon={<SettingOutlined />} title="系统设置">
                <Menu.Item key="5"><Link to="/managelist">管理员列表</Link></Menu.Item>
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
              <Switch>
                <Route path='/home' component={Manage}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
