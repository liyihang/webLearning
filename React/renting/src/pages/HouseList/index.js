import React from "react";
import SearchBar from "../../components/SearchBar";

const {label}  = JSON.parse(localStorage.getItem('bkzf'));

export default class HouseList extends React.Component {
  render() {
    return (
      <div>
        <SearchBar curCity = {label}></SearchBar>
      </div>
    );
  }
}
