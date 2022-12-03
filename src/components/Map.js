import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { LocationPin } from './LocationPin'


  
  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit GoMycode Gafsa</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={ `${process.env.REACT_APP_WEATHER_API_KEY} `}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  
  export default Map