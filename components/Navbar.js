import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-2000">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 w-1/3">
        
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </div>
        <ul className="hidden md:flex justify-center space-x-10 text-base font-medium text-gray-700 w-1/3 mx-auto">
          <li><a href="#tentang" className="hover:text-blue-600">Tentang Kami</a></li>
          <li><a href="#order" className="hover:text-blue-600">Order</a></li>
          <li><a href="#lokasi" className="hover:text-blue-600">Lokasi</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
        </ul>
        <div className="w-1/3" />
      </div>
    </nav>
  )
}
