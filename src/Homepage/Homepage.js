import React, { Component } from "react";
import Cards from "../Cards/Cards";

import Banner from "./Banner";
import Browse from "./Browse";
import Carousel from "./Carousel";
import Deal from "./Deal";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Browse />
        <Banner />
        <Carousel />
        <Deal />
        <Cards />
      </div>
    );
  }
}
