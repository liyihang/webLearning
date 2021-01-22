import {
  List,
  InputItem,
  Picker,
  ImagePicker,
  TextareaItem,
  Flex,
  Toast,
} from "antd-mobile";
import React from "react";

import NavHeader from "../../../components/NavHeader";
import HouseProvided from "../../../components/HouseProvided";
import styles from "./index.module.css";
import { http } from "../../utils/http";

const Item = List.Item;

// 房屋类型
const roomTypeData = [
  { label: "一室", value: "ROOM|d4a692e4-a177-37fd" },
  { label: "二室", value: "ROOM|d1a00384-5801-d5cd" },
  { label: "三室", value: "ROOM|20903ae0-c7bc-f2e2" },
  { label: "四室", value: "ROOM|ce2a5daa-811d-2f49" },
  { label: "四室+", value: "ROOM|2731c38c-5b19-ff7f" },
];

// 朝向：
const orientedData = [
  { label: "东", value: "ORIEN|141b98bf-1ad0-11e3" },
  { label: "西", value: "ORIEN|103fb3aa-e8b4-de0e" },
  { label: "南", value: "ORIEN|61e99445-e95e-7f37" },
  { label: "北", value: "ORIEN|caa6f80b-b764-c2df" },
  { label: "东南", value: "ORIEN|dfb1b36b-e0d1-0977" },
  { label: "东北", value: "ORIEN|67ac2205-7e0f-c057" },
  { label: "西南", value: "ORIEN|2354e89e-3918-9cef" },
  { label: "西北", value: "ORIEN|80795f1a-e32f-feb9" },
];

// 楼层
const floorData = [
  { label: "高楼层", value: "FLOOR|1" },
  { label: "中楼层", value: "FLOOR|2" },
  { label: "低楼层", value: "FLOOR|3" },
];

export default class RentAdd extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props)
    const { state } = props.location;
    const community = {
      name: "",
      id: "",
    };

    if (state) {
      // 有小区信息数据，存储到状态中
      community.name = state.name;
      community.id = state.id;
    }

    this.state = {
      // 临时图片地址
      tempSlides: [],

      // 小区的名称和id
      community,
      // 价格
      price: "",
      // 面积
      size: "",
      // 房屋类型
      roomType: "",
      // 楼层
      floor: "",
      // 朝向：
      oriented: "",
      // 房屋标题
      title: "",
      // 房屋图片
      houseImg: "",
      // 房屋配套：
      supporting: "",
      // 房屋描述
      description: "",
    };
  }
  //   获取租房信息
  getValue = (name, val) => {
    this.setState({
      [name]: val,
    });
  };
  //   获取租房配置
  handleProvided = (selected) => {
    this.setState({
      supporting: selected.join("|"),
    });
  };
  //   房屋图片
  handleImg = (files) => {
    this.setState({
      tempSlides: files,
    });
  };
  //   提交租房信息
  addHouse = async () => {
    let houseImg = "";
    const {
      tempSlides,
      title,
      size,
      community,
      price,
      description,
      supporting,
      oriented,
      floor,
      roomType,
    } = this.state;
    if (tempSlides.length > 0) {
      const form = new FormData();
      tempSlides.forEach((item) => form.append("file", item.file));
      const res = await http.post("/houses/image", form, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      houseImg = res.data.body.join("|");
    }
    const result = await http.post("/user/houses", {
      title,
      size,
      community: community.id,
      price,
      description,
      supporting,
      oriented,
      floor,
      roomType,
      houseImg,
    });
    if (result.data.status === 200) {
      Toast.info("发布房源成功", 1, null);
      this.props.history.push("/rent");
    } else {
      Toast.info("服务器出错，稍后再试……", 1, null);
    }
  };
  render() {
    const { history } = this.props;
    const {
      community,
      price,
      roomType,
      floor,
      oriented,
      description,
      tempSlides,
      title,
      size,
    } = this.state;
    return (
      <div className={styles.root}>
        <NavHeader>添加房源</NavHeader>
        {/* 房屋基本信息 */}
        <List renderHeader={() => "房源信息"} className={styles.title}>
          <Item
            extra={community.name || "请输入小区名称"}
            arrow="horizontal"
            onClick={() => history.replace("/rent/search")}
          >
            小区名称:
          </Item>
          <InputItem
            placeholder="租金"
            extra="元/月"
            value={price}
            onChange={(val) => this.getValue("price", val)}
          >
            租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金:
          </InputItem>
          <InputItem
            placeholder="建筑面积"
            extra="m²"
            value={size}
            onChange={(val) => this.getValue("size", val)}
          >
            建筑面积:
          </InputItem>

          <Picker
            data={roomTypeData}
            value={[roomType]}
            cols={1}
            onChange={(val) => this.getValue("roomType", val[0])}
          >
            <Item>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</Item>
          </Picker>
          <Picker
            data={floorData}
            value={[floor]}
            cols={1}
            onChange={(val) => this.getValue("floor", val[0])}
          >
            <Item>楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层:</Item>
          </Picker>
          <Picker
            data={orientedData}
            value={[oriented]}
            cols={1}
            onChange={(val) => this.getValue("oriented", val[0])}
          >
            <Item>朝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;向:</Item>
          </Picker>
        </List>
        {/* 房屋标题 */}
        <List renderHeader={() => "房屋标题"} className={styles.title}>
          <InputItem
            value={title}
            placeholder="请输入房屋标题"
            onChange={(val) => this.getValue("title", val)}
          ></InputItem>
        </List>
        {/* 房屋图片 */}
        <List renderHeader={() => "房屋图像"} className={styles.title}>
          <ImagePicker
            files={tempSlides}
            multiple={true}
            onChange={this.handleImg}
          ></ImagePicker>
        </List>
        {/* 房屋配置 */}
        <List renderHeader={() => "房屋配置"} className={styles.title}>
          <HouseProvided select onSelect={this.handleProvided}></HouseProvided>
        </List>
        {/* 房屋描述 */}
        <List renderHeader={() => "房屋描述"} className={styles.title}>
          <TextareaItem
            rows={5}
            placeholder="请输入描述"
            value={description}
            onChange={(val) => this.getValue("description", val)}
          ></TextareaItem>
        </List>
        <Flex className={styles.bottom}>
          <Flex.Item className={styles.cancel} onClick={this.onCancel}>
            取消
          </Flex.Item>
          <Flex.Item className={styles.confirm} onClick={this.addHouse}>
            提交
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
