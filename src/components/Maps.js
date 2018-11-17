import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Maps extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  //const googleapis = with

  render(){

    const GoogleMapExample = withGoogleMap(props=> (
      <GoogleMap
          defaultCenter = {{lat: 39.648209, lng: -75.711185}}
          defaultZoom = {13}
      >
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={  <div style={{height:`340px`, width:
          '340px'}}/>}
          mapElement={  <div style={{height:`100%`}}  />}
        />

        <Marker
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        />

      </div>
    );
  }
};

export default Maps;
