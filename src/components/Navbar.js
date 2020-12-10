import React from "react";
import { Link } from "react-router-dom";
import "./_NavBar.scss";
import logo from "../img/pading.png";


export default class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/" onClick={this.props.scrollToTop}>
            <img src={logo} alt="Pading find the perfect place to meet" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-social">
            <a
              href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/padingapp/?hl=fr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
