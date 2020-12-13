import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Geocode from "react-geocode";
import "./_Map.scss";
import yellowMarker from "../img/yellowmarker.png";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

Geocode.setApiKey(API_KEY);

export default class Map extends React.Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 48.1078,
      longitude: 0,
      zoom: 2.5,
      minZoom: 2.5,
      maxZoom: 2.5,
      interactive: false,
      attributionControl: false
    }
  };

  render() {
    return (
      <div className="mapbox">
        {console.log(this.state.viewport)}
        <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibG91aXMxNDA0IiwiYSI6ImNrNm0zOGFkMDBqdG8zZXA3NGR5ejhzYnQifQ.Yt9WzWg8hdm6b9h5k5sxHw"
        mapStyle="mapbox://styles/louis1404/ckbfbhg8x21z51ik4rb1ylkrn"
        onViewportChange={(viewport) => this.setState({ viewport })}
        >        
          <Marker latitude={55.86515} longitude={-4.25763}>
            <div className="marker-departure-city">
              <img src={yellowMarker} alt="Departure city" />
            </div>
          </Marker>
          <Marker latitude={51.107883} longitude={17.038538}>
            <div className="marker-departure-city">
              <img src={yellowMarker} alt="Departure city" />
            </div>
          </Marker>
          <Marker latitude={41.145821} longitude={-8.613985}>
            <div className="marker-departure-city">
              <img src={yellowMarker} alt="Departure city" />
            </div>
          </Marker>
          <Marker latitude={54.7} longitude={1.8}>
            <button className="marker-destination" onClick={this.props.amsterdam}>
              <p>125€</p>
              <div className="marker-destination-arrow"></div>
            </button>
          </Marker>

          <Marker latitude={50} longitude={15.5}>
            <button className="marker-destination" onClick={this.props.budapest}>
              <p>78€</p>
              <div className="marker-destination-arrow"></div>
            </button>
          </Marker>

          <Marker latitude={43.5} longitude={12}>
            <button className="marker-destination" onClick={this.props.naples}>
              <p>97€</p>
              <div className="marker-destination-arrow"></div>
            </button>
          </Marker>

          <Marker latitude={40.5} longitude={-7}>
            <button className="marker-destination" onClick={this.props.cordoba}>
              <p>154€</p>
              <div className="marker-destination-arrow"></div>
            </button>
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}
