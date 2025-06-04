import Image from 'next/image'

export default function DeliveryArea() {
  return (
    <section className="py-20 px-6 bg-white" id="lokasi">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Lingkup Pengiriman Kami</h2>
        <p className="text-gray-600 mb-6">
          Untuk memastikan efisiensi pengiriman, kami melakukan pembatasan terhadap jarak lingkup pengiriman kami!
        </p>
        <p className='text-gray-600 mb-6'>
          Lingkaran merah di bawah adalah lingkup pengiriman yang  dapat kami cakup.
        </p>
        <div className="flex justify-center">
          <Image src="/images/map.jpg" width={1304} height={634} alt="Peta Lingkup" />
        </div>
      </div>
    </section>
  )
}
