import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import React from 'react'
import PropTypes from 'prop-types'

import dotenv from 'dotenv'

dotenv.config()

const MapContainer = (props) => {
  let markers = null

  if (props.people.length > 0) {
    markers = props.people.map((person, index) => (
      <Marker
        key={index}
        label={{ text: `${person.Display}`, fontWeight: 'bold' }}
        position={{ lat: person.Lat, lng: person.Long }}
      />
    ))
  }
  return (
    <Map
      google={props.google}
      className={'map'}
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={9}
      cluster={true}
      initialCenter={props.people.length > 0 ? { lat: props.people[ 0 ].Lat, lng: props.people[ 0 ].Long } : null}
    >
      {markers}
    </Map>
  )
}

MapContainer.propTypes = {
  people: PropTypes.array.isRequired,
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAPS_API_KEY)
})(MapContainer)
