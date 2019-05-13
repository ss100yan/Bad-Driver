import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import car from "./car.svg"
const AnyReactComponent = ({ text }) => <img src={car} />;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.761681,
      lng: -80.191788
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '20vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCEksOUoC96zDNpnC_IkaTfzxjokwUCnac" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;