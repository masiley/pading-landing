import React from "react";
import NavBar from "./Navbar";
import Banner from "./Banner";
import Why from "./Why";
import How from "./How";
import Simple from "./Simple";
import Cards from "./Cards";
import MyClimate from "./MyClimate";
import Footer from "./Footer";
import "./_App.scss";

export default class App extends React.Component {
  

  scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Cards />
        <Why />
        <How />
        <Simple />
        <MyClimate />
        <Footer scrollToTop={this.scrollToTop} />
      </div>
    );
  }
}
