import React from 'react'
import { Component } from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    style={{
                        width: "370px", height: "340px",

                        position: "fixed",
                        boxShadow: "5px 5px rgba(0,0,0, 0.2)",
                    }}
                    zoom={17}
                    initialCenter={
                        {
                            lat: 28.497816076985096,
                            lng: 77.43289724039266
                        }
                    }
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDITLyN5X5dHlTtx8GI5vU-faPZbXw4Wgc"
})(MapContainer)


// ------------------(REFERENCE)---------------------
// Google developer console for getting api for maps:
// https://developers.google.com/maps/documentation/javascript/get-api-key

// npm google-maps-react:
// https://www.npmjs.com/package/google-maps-react

// latitude and longitude calculator:
// https://www.latlong.net/convert-address-to-lat-long.html

// apiKey: "AIzaSyDITLyN5X5dHlTtx8GI5vU-faPZbXw4Wgc"
// lat: 28.497816076985096,
// lng: 77.43289724039266