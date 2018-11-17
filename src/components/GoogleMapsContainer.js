import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class GoogleMapsContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker:{},
        selectedPlace:{}
      }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }


  onMarkerClick = (props, marker, e) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
    };

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
              showingInfoWindow: false,
              activeMarker: null
            });
        }
    };

render() {
    return (
      <Map
        xs = { 12 }
        style = { this.state.style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 10 }
        initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
      >

        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper>

        </InfoWindow>
      </Map>
    );
  }
}



export default GoogleApiWrapper({
    api: (process.env.key="AIzaSyC93apWc0FNLpQAkKxabkwhzsYlcLq8WUo")
})(GoogleMapsContainer)
