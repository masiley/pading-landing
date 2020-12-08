import React from "react";
import Map from "./Map";
import "./_Banner.scss";
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
            icon: "error",
            title: "Sorry, this email address is not valid",
            showConfirmButton: false,
            allowEnterKey: "true",
            allowOutsideClick: "true",
            buttonsStyling: "false",
            timer: 1500,
          })}
        </SweetAlert>
      );
    }
  };

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
              '<br/><br/><div className="alertmail-social"><a href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a><a href="https://www.instagram.com/padingapp/?hl=fr" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></div>',
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
              '<br/><br/><div className="alertmail-social"><a href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a><a href="https://www.instagram.com/padingapp/?hl=fr" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></div>',
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

export default class Banner extends React.Component {

  scrollToBudapest() {
    const element = document.getElementById("budapest");
    element.scrollIntoView(false)
  }

  scrollToNaples() {
    const element = document.getElementById("naples");
    element.scrollIntoView(false)
  }

  scrollToAmsterdam() {
    const element = document.getElementById("amsterdam");
    element.scrollIntoView(false)
  }

  scrollToCordoba() {
    const element = document.getElementById("cordoba");
    element.scrollIntoView(false)
  }
  
  
  render() {

    const url =
      "https://pading.us8.list-manage.com/subscribe/post?u=f662f9f87cc780ecd97294f34&amp;id=0ef42685e7";
    return (
      <div className="banner">
        <div className="valueprop">
          <div className="valueprop-title">
            <h1>
              The travel comparator that brings you closer to your friends and
              family
            </h1>
          </div>
          <div className="valueprop-details">
            <p>
            <b>From different departure cities, explore
              all common destinations to meet each other at the lowest fare</b>
            </p>
          </div>

          <div className="email-form-banner">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
               
        <div className="map">          
          <Map
            budapest={this.scrollToBudapest}
            naples={this.scrollToNaples}
            amsterdam={this.scrollToAmsterdam}
            cordoba={this.scrollToCordoba}
          />
        </div>
      </div>
    );
  }
}
