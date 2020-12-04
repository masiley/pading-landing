import React from "react";
import { Link } from "react-router-dom";
import "./_Footer.scss";
import Faq from "./Faq";
import Popup from "reactjs-popup";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submit = () => {
    if (email && emailRegex.test(email.value)) {
      onValidated({
        EMAIL: email.value,
      });
    } else {
      return (
        <SweetAlert>
          {swal.fire({
            icon: 'error',
            title: 'This email address is not valid. Can you check it?',
            showConfirmButton: false,
            allowEnterKey: 'true',
            allowOutsideClick: 'true',
            buttonsStyling: 'false',
            timer: 1500
          })}
        </SweetAlert>
      )
    }
  }

  return (
    <div>
      {status === "error" && (
        <SweetAlert>
          {swal.fire({
            icon: "info",
            title: "You are already part of our community but you can still follow us on Facebook and Instagram!",
            showConfirmButton: false,
            allowEnterKey: "true",
            allowOutsideClick: "true",
            buttonsStyling: "false",
            html:
              '<br/><div class="alertmail-social"><a href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://www.instagram.com/padingapp/?hl=fr" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></div>',
          })}
        </SweetAlert>
      )}
      {status === "success" && (
        <SweetAlert>
          {swal.fire({
            icon: "success",
            title: "Thanks for registrating! You can also follow us on Facebook and Instagram",
            showConfirmButton: false,
            allowEnterKey: "true",
            allowOutsideClick: "true",
            buttonsStyling: "false",
            html:
              '<br/><div class="alertmail-social"><a href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://www.instagram.com/padingapp/?hl=fr" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></div>',
          })}
        </SweetAlert>
      )}

      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Register with your email"
      />

      <button
        className="btn-blue"
        onClick={submit}
        disabled={status === "sending"}
      >
        <i className="fas fa-paper-plane fa-lg"></i>
      </button>
    </div>
  );
};

const SweetAlert = withSwalInstance(swal);

export default class Footer extends React.Component {
  state = {
    faq: false
  }

  render() {
    const url =
      "https://pading.us8.list-manage.com/subscribe/post?u=f662f9f87cc780ecd97294f34&amp;id=0ef42685e7";
    return (
      <div className="wrapper">
        <div className="footer">
          <div className="footer-menu">
            <div className="footer-menu-email">
              <p><b>Travel and meet with your friends and
                family</b></p>
              <div className="footer-menu-email-form">
              <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
              </div>
            </div>
            <div className="footer-menu-app-contact">
              <div className="footer-menu-app">
                <h4>Pading</h4>
                <Popup
                  modal
                  trigger={
                    <a>
                      <p>FAQ</p>
                    </a>
                  }
                >
                  <Faq />
                </Popup>
                <Link to="/privacypolicy">
                  <p>Privacy policy</p>
                </Link>
              </div>
              <div className="footer-menu-contact">
                <h4>Contact</h4>
                <a href="mailto:contact@pading.eu" target="_blank" rel="noopener noreferrer">
                  <p>Contact us</p>
                </a>
                <div className="footer-social">
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
          </div> 
            <div className="tree-nations">
            <a
              src="https://tree-nation.com/profile/impact/pading-1#co2"
              target="_blank"
              style={{
                paddingBottom: "2rem",
                position: "relative",
                cursor: "pointer",
                display: "block",
                zIndex: 1
              }}
            >
              <img
                src="https://tree-nation.com/images/tracking/label-co2-website-white-en.png"
                style={{ width: 150, height: "auto" }}
              />
            </a>
          </div>  
          <button className="scrollup" onClick={this.props.scrollToTop}><i className="fas fa-chevron-up fa-lg"></i></button>
        </div>
      </div>
    );
  }
}
