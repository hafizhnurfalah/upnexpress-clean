import Image from 'next/image'

const features = [
  {
    title: 'Mudah',
    icon: '/icons/mudah.png',
    description: 'Dengan sistem pemesanan langsung ke pengirim, membuat UPNExpress sangat mudah untuk dipakai.',
    link: '#order',
  },
  {
    title: 'Cepat',
    icon: '/icons/cepat.png',
    description: 'Jarak pengiriman terbatas, membuat UPNExpress dapat mempertahankan kecepatan pengiriman!',
    link: '#lokasi',
  },
  {
    title: 'Responsif',
    icon: '/icons/responsif.png',
    description: 'Kami menerima segala keluhan dan saran pelanggan, membuat kami sangat responsif dalam menerima saran dan perubahan.',
    link: '#faq',
  },
  {
    title: 'Terjangkau',
    icon: '/icons/terjangkau.png',
    description: 'Kami selalu mementingkan kemudahan pelanggan dan mitra pengemudi kami agar tidak kesulitan dalam melakukan pengiriman.',
    link: '#lokasi',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">Mengapa Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image src={item.icon} alt={item.title} width={60} height={60} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-sm text-gray-900 font-medium hover:underline inline-flex items-center"
              >
                Lebih Lanjut →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
