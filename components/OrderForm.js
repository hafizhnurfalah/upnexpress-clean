import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// MapComponent hanya dijalankan di client-side
const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false })

export default function OrderForm() {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    detail: '',
    lokasi: null,
  })

  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          })
        },
        (err) => {
          console.warn('Gagal ambil lokasi:', err)
        }
      )
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const { nama, telepon, detail, lokasi } = formData
    if (!lokasi) return alert('Silakan pilih lokasi pengiriman di peta.')

    const userLink = userLocation
      ? `https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}`
      : 'Tidak tersedia'

    const link = `https://wa.me/6281281004063?text=${encodeURIComponent(
      `Hai! Saya ingin melakukan pemesanan UPNExpress dengan detail pemesanan seperti berikut.\n\n` +
      `Nama: ${nama}\n` +
      `Nomor Telepon: ${telepon}\n` +
      `Detail Pengiriman: ${detail}\n` +
      `Lokasi Pengiriman: https://www.google.com/maps?q=${lokasi.lat},${lokasi.lng}\n` +
      `Lokasi Saat Ini: ${userLink}\n`
    )}`

    window.open(link, '_blank')
  }

  return (
    <section id="order" className="py-20 bg-white px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-md shadow-md border border-black">
        <h2 className="text-2xl font-bold mb-6 text-black">Pesan Sekarang!</h2>

        <label className="block font-medium text-sm mb-1 text-black">Nama</label>
        <input
          name="nama"
          type="text"
          placeholder="Ketik disini..."
          value={formData.nama}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-black text-black placeholder-black rounded-md focus:outline-none"
        />

        <label className="block font-medium text-sm mb-1 text-black">Nomor Telepon</label>
        <input
          name="telepon"
          type="text"
          placeholder="Ketik disini..."
          value={formData.telepon}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-black text-black placeholder-black rounded-md focus:outline-none"
        />

        <label className="block font-medium text-sm mb-1 text-black">Detail Pengiriman</label>
        <textarea
          name="detail"
          placeholder="Ketik disini..."
          value={formData.detail}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-black text-black placeholder-black rounded-md focus:outline-none"
        />

        <label className="block font-medium text-sm mb-2 text-black">Lokasi Pengiriman</label>
        <div className="mb-6 rounded overflow-hidden h-[300px] border border-black">
          <MapComponent
            selectedLocation={formData.lokasi}
            onSelect={(latlng) => setFormData({ ...formData, lokasi: latlng })}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black text-white hover:bg-gray-900 transition font-semibold py-2 px-6 rounded-full w-full"
        >
          Pesan
        </button>
      </div>
    </section>
  )
}
