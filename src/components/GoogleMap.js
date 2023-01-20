import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
// import { MapPin } from 'react-feather'

let mapkey = ''
if (process.env.GATSBY_NETLIFY_MAP_KEY) {
  mapkey = process.env.GATSBY_NETLIFY_MAP_KEY
}

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.372905,
      lng: -89.095827
    },
    zoom: 14
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={30.372905} lng={-89.095827} text={'Kreyser Avrora'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'red' }}>
      XXX
      {/* <MapPin /> */}
    </div>
  )
}
