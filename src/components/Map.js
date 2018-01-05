import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'

// const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class SimpleMap extends Component {


constructor(props) {
    super(props);
    console.log('map props');
    console.log(props);
}

// <div style={{height: '500px', width: '500px'}}>

render() {
    return (
        <div className="container">
            <div className="row">
                <div className="map">
                    <GoogleMapReact
                        className="container"
                        bootstrapURLKeys={{
                            key:'AIzaSyCNVXQixKwCtCgmOT6rH-N9p7dnj8bXIc8',
                            language: 'en',
                        }}
                        defaultCenter={{lat: this.props.lat, lng: this.props.long}}
                        defaultZoom={13}
                    >
                    </GoogleMapReact>
                </div> 
            </div>
        </div>
    )
  }
}