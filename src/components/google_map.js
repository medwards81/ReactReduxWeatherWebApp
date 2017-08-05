import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCener={{lat: props.lat, lng: props.lon}} />
            }
        />
    );
}
