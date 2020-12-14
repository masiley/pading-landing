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
import bigLoaderPading from "../img/big-loader-pading.mp4";

export default class App extends React.Component {

  scrollToTop() {
    document.scrollingElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

 

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>

          {setTimeout(() => document.getElementById("big-loader").style.visibility="hidden", 3000)}
           
            <video id="big-loader" autoPlay="autoplay" muted playsInline>
              <source src={bigLoaderPading} alt="loader pading app"/>
            </video>
            
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
