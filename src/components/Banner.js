import React from 'react';
import './_Banner.scss';
import catsandplants from '../img/catsandplants.mp4';
import mappoints from '../img/mappoints.png';
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
            icon: 'info',
            title: 'You are already part of our community :)',
            showConfirmButton: false,
            allowEnterKey: 'true',
            allowOutsideClick: 'true',
            buttonsStyling: 'false',
            html: '<br/><p>You can still follow us on social media!</p><br/><div class="alertmail-social"><a href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://www.instagram.com/padingapp/?hl=fr" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></div>',
          })}
        </SweetAlert>
      )}
      {status === "success" && (
        <SweetAlert>
          {swal.fire({
            icon: 'success',
            title: 'Thank you for believing in us! You are now registered',
            showConfirmButton: false,
            allowEnterKey: 'true',
            allowOutsideClick: 'true',
            buttonsStyling: 'false',
            html: '<br/><p>You can also follow us on social media</p><br/><div class="alertmail-social"><a href="https://www.facebook.com/Pading-103563007939325/?view_public_for=103563007939325" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://www.instagram.com/padingapp/?hl=fr" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></div>',
          })}
        </SweetAlert>
      )}
  
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
  
        <button
          className="btn-blue"
          onClick={submit}
          disabled={status === "sending"}
        >
          Try this app
        </button>
      </div>
    );
  };
  
  const SweetAlert = withSwalInstance(swal);

export default class Banner extends React.Component {
    render() {
        const url =
        "https://pading.us8.list-manage.com/subscribe/post?u=f662f9f87cc780ecd97294f34&amp;id=0ef42685e7";
        return (
          <div className="hello">
            <div className="banner">
                <div className="valueprop">  
                    <div className="valueprop-title">
                        <h1>Find the perfect place to meet</h1>
                    </div>
                    <div className="valueprop-details">
                        <p><b>Select your dates, tell us where you all come from, explore destinations to meet each other at the lowest price</b></p>
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
                <div className="gif">
            
                    <video className="banner-img" autoPlay="autoplay" loop muted playsInLine>
                        <source src={catsandplants} />
                    </video>           
                </div>
            </div>
            <div className="earth">
              <img className="earth-img" src={mappoints} alt="meeting of friends thanks to travel"/>
            </div>
          </div>
        )
    }
}