import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

export default function MapComponent({ onSelect, selectedLocation }) {
  const center = { lat: -6.257684, lng: 106.782007 }

  function LocationPicker() {
    useMapEvents({
      click(e) {
        onSelect(e.latlng)
      }
    })
    return null
  }

  return (
    <MapContainer center={center} zoom={16} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationPicker />
      {selectedLocation && <Marker position={selectedLocation} />}
    </MapContainer>
  )
}
