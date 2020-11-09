import React, { Component } from "react";

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Plus from "../components/Plus";
import Main1 from "../components/Main1";
import Navbar2 from "../components/Navbar2";

import "../Style.css";
import "../Footer.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar2 />
        <Main1 />
        <Carousel />
        <Plus />
        <Footer />
      </>
    );
  }
}
