import React from "react";
import HouseItem from "../../components/HouseItem";
import { http } from "../utils/http";
import { BASE_URL } from "../utils/url";

export default class Rent extends React.Component {
  state = {
    housesinfo: [],
  };
  getRentHouse = async () => {
    const res = await http.get("/user/houses");
    this.setState({
      housesinfo: res.data.body,
    });
  };
  componentDidMount() {
    this.getRentHouse();
  }
  renderRentList = () => {
    const { housesinfo } = this.state;
    return housesinfo.map((item) => (
      <HouseItem
        src={BASE_URL + item.houseImg}
        title={item.title}
        desc={item.desc}
        tags={item.tags}
        price={item.price}
        onClick={() => this.props.history.push(`/detail/${item.houseCode}`)}
        key={item.houseCode}
      ></HouseItem>
    ));
  };
  render() {
    return (
      <div>
        {/* <HouseItem></HouseItem> */}
        {this.renderRentList()}
      </div>
    );
  }
}
