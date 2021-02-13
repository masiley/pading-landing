import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Map from "./Map";
import CustomForm from "./CustomForm";
import "./_Banner.scss";

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
      <div>

        <div className="banner">
          <div className="map">                       
            <Map
              budapest={this.scrollToBudapest}
              naples={this.scrollToNaples}
              amsterdam={this.scrollToAmsterdam}
              cordoba={this.scrollToCordoba}
            />
          </div>

          <div className="valueprop">
              <div className="valueprop-title">
                <h1>
                  Flights and trains for friends coming from multiple places
                </h1>
              </div>
              <div className="valueprop-details">
                <p>
                <b>Enter your different departure cities, explore
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

        </div>
      </div>
    );
  }
}
