import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Banner from "./Banner";
import Why from "./Why";
import How from "./How";
import Simple from "./Simple";
import Cards from "./Cards";
import Climate from "./Climate";
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from "./Footer";
import "./_App.scss";
import padingLogo from "../img/simple-logo.png";

export default class App extends React.Component {

  scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  loadMap() {
    {setTimeout(() => {
      document.getElementById("app-spinner").style.visibility="hidden"
    },1500)}
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          {this.loadMap()}
          
            <div id="app-spinner"><img src={padingLogo}/></div>
            <NavBar scrollToTop={this.scrollToTop}/>
            <Route exact path="/" component={Banner} />
            <Route exact path="/" component={Cards} />
            <Route exact path="/" component={Why} />
            <Route exact path="/" component={How} />
            <Route exact path="/" component={Simple} />
            <Route exact path="/" component={Climate} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Footer scrollToTop={this.scrollToTop} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
