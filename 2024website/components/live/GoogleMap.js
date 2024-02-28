import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React from 'react';
import { Typography } from '@mui/material';

const mapContainerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '400px', // You can adjust this value as needed
  overflow: 'hidden' // This will prevent the content from overflowing
};


const GoogleMap = () => {
    const [selectedPlace, setSelectedPlace] = React.useState(null);
    const [activeMarker, setActiveMarker] = React.useState(null);

    const onMarkerClick = (props, marker, e) => {
      setSelectedPlace(props);
      setActiveMarker(marker);
    };

    const onInfoWindowClose = () => {
      setActiveMarker(null);
      setSelectedPlace(null);
    };

    return (
        <div style={mapContainerStyle}>
            <Map
                google={window.google}
                zoom={16}
                style={mapContainerStyle}
                initialCenter={{
                    lat: 35.90982, 
                    lng: -79.04837,
                }}
            >
                <Marker
                    title="Bell Tower Deck"
                    name="Bell Tower Parking Deck, Chapel Hill, NC 27514"
                    link="https://www.google.com/maps/dir/Bell+Tower+Parking+Deck,+Chapel+Hill,+NC/Woollen+Gymnasium,+South+Road,+Chapel+Hill,+NC/@35.9082111,-79.0502803,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89acc2eedc3bd00f:0x2dd3a16fc7f5b0c9!2m2!1d-79.0500641!2d35.9067103!1m5!1m1!1s0x89acc2ebb64d923f:0x46d0fc575842e791!2m2!1d-79.046014!2d35.9096999!3e2"
                    position={{
                        lat: 35.906657, 
                        lng: -79.050196,
                    }}
                    onClick={onMarkerClick}
                />
                <Marker
                    title="Cobb Deck"
                    name="Cobb Parking Deck Paul Green Drive, Chapel Hill, NC 27514"
                    link="https://www.google.com/maps/dir/Cobb+Parking+Deck,+Chapel+Hill,+NC+27514/Woollen+Gymnasium,+South+Road,+Chapel+Hill,+NC/@35.9107229,-79.0479376,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89acc2ea68ddf24b:0x38f6620f02eadfae!2m2!1d-79.0456143!2d35.911746!1m5!1m1!1s0x89acc2ebb64d923f:0x46d0fc575842e791!2m2!1d-79.046014!2d35.9096999!3e2"
                    position={{
                        lat: 35.9116, 
                        lng: -79.0451,
                    }}
                    onClick={onMarkerClick}
                />
                <InfoWindow
                  marker={activeMarker}
                  visible={selectedPlace != null}
                  onClose={onInfoWindowClose}
                >
                  <div>
                  <Typography variant="h4" color="#1876bd">
                <a href={selectedPlace?.link}>{selectedPlace?.title}</a>
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">{selectedPlace?.name}</Typography>
              </div>
                  </div>
                </InfoWindow>
            </Map>
            </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_API_KEY
})(GoogleMap);
