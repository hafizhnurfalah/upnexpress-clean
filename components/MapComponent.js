import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet/hooks'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-control-geocoder'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'

// Atur ikon default Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

// Komponen untuk kontrol pencarian lokasi
function GeocoderControl({ onSelect }) {
  const map = useMap()

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
      placeholder: 'Cari lokasi pengiriman...',
      geocoder: L.Control.Geocoder.nominatim(),
      showResultIcons: true,
    })
      .on('markgeocode', function (e) {
        const latlng = e.geocode.center
        onSelect({ lat: latlng.lat, lng: latlng.lng })
        map.setView(latlng, 16)
      })
      .addTo(map)
      // Tambahkan ini setelah .addTo(map)
      L.DomEvent.disableScrollPropagation(geocoder._container)
      L.DomEvent.disableClickPropagation(geocoder._container)


    return () => {
      map.removeControl(geocoder)
    }
  }, [map, onSelect])

  return null
}

// Komponen untuk memilih lokasi dengan klik pada peta
function LocationPicker({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng)
    },
  })
  return null
}

// Komponen utama peta
export default function MapComponent({ onSelect, selectedLocation }) {
  const center = { lat: -6.257684, lng: 106.782007 }

  return (
    <MapContainer center={center} zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeocoderControl onSelect={onSelect} />
      <LocationPicker onSelect={onSelect} />
      {selectedLocation && <Marker position={selectedLocation} />}
    </MapContainer>
  )
}
