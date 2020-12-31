import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Modal } from "antd-mobile";
import styles from "./index.module.css";
import Img from "../../assets/images/avatar.png";
import { BASE_URL } from "../utils/url";
import { isAuth, getToken, removeToken } from "../utils/auth";
import { http } from "../utils/http";

const alert = Modal.alert;
const menus = [
  { id: 1, name: "我的收藏", iconfont: "icon-coll", to: "/favorate" },
  { id: 2, name: "我的出租", iconfont: "icon-ind", to: "/rent" },
  { id: 3, name: "看房记录", iconfont: "icon-record" },
  { id: 4, name: "成为房主", iconfont: "icon-identity" },
  { id: 5, name: "个人资料", iconfont: "icon-myinfo" },
  { id: 6, name: "联系我们", iconfont: "icon-cust" },
];
export default class User extends React.Component {
  state = {
    // 是否登录
    isLogin: isAuth(),
    // 用户信息
    userInfo: {
      avatar: "",
      nickname: "",
    },
  };
  componentDidMount() {
    this.getUserInfo();
  }
  // 获取用户信息
  quit() {
    alert("退出", "确定退出嘛???", [
      { text: "取消" },
      {
        text: "确认",
        onPress: async () => {
          await http.post("/user/logout", null, {
            headers: { authorization: getToken() },
          });
          removeToken();
          this.setState({
            isLogin: false,
            userInfo: {
              avatar: "",
              nickname: "",
            },
          });
        },
      },
    ]);
  }
  async getUserInfo() {
    if (!this.state.isLogin) {
      // 未登录
      return;
    }

    // 发送请求，获取个人资料
    const res = await http.get("/user", {
      headers: {
        authorization: getToken(),
      },
    });
    // console.log(res)
    if (res.data.status === 200) {
      const { avatar, nickname } = res.data.body;
      this.setState({
        userInfo: {
          avatar: BASE_URL + avatar,
          nickname,
        },
      });
    } else {
      this.setState({
        isLogin: false,
      });
    }
  }
  render() {
    const { history } = this.props
    const {
      isLogin,
      userInfo: { avatar, nickname },
    } = this.state;
    return (
      <div>
        {/* 用户信息 */}
        <div className={styles.profile}></div>
        {isLogin ? (
          <div className={styles.userinfo}>
            <img
              className={styles.avatar}
              src={avatar}
              alt=""
              title="用户头像"
            />
            <span>{nickname}</span>
            <span className={styles.quit} onClick={this.quit}>
              退出
            </span>
          </div>
        ) : (
          <div className={styles.userinfo}>
            <img className={styles.avatar} src={Img} alt="" title="用户头像" />
              <Button size="small" inline type="primary" onClick={() => history.push('/login')}>
                登录
              </Button>
          </div>
        )}
        {/*grid  */}
        <div className={styles.items}>
          <Grid
            data={menus}
            columnNum={3}
            hasLine={false}
            renderItem={(item) =>
              item.to ? (
                <Link to={item.to}>
                  <div className={styles.menuItem}>
                    <i className={`iconfont ${item.iconfont}`}></i>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ) : (
                <div className={styles.menuItem}>
                  <i className={`iconfont ${item.iconfont}`}></i>
                  <span>{item.name}</span>
                </div>
              )
            }
          />
        </div>
        {/* 推荐 */}
        <h2 className={styles.new}>新房推荐</h2>
        <div className={styles.recommend}>
          <div className={styles.item0}>
            <p className={styles.title}>刚需必看</p>
            <p className={styles.subtitle}>低价好户型</p>
          </div>
          <div className={styles.item1}>
            <p className={styles.title}>交通配套</p>
            <p className={styles.subtitle}>去哪里都方便</p>
          </div>
          <div className={styles.item2}>
            <p className={styles.title}>新开好盘</p>
            <p className={styles.subtitle}>品牌好盘抢先看</p>
          </div>
        </div>
      </div>
    );
  }
}
