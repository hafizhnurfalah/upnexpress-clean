import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    // Swiper akan inisialisasi tombol setelah DOM render
  }, [])

  return (
    <section className="bg-white py-24 px-6" id="tentang">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Kami Memberikan Pelayanan yang <br className="hidden md:block" />
            Cepat, Murah, dan Lengkap!
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto font-normal">
            UPNExpress hadir sebagai solusi inovatif yang menawarkan layanan antar cepat, terjangkau, dan terintegrasi khusus untuk area kampus. Dengan memahami ritme kehidupan akademis dan kebutuhan mobilitas yang dinamis, UPNExpress bertujuan mempermudah aktivitas harian, memastikan segala keperluan dapat terpenuhi tanpa harus meninggalkan lingkungan kampus.
          </p>
        </div>

        <div className="bg-[#D2B48C] py-6 px-4 rounded-md">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            loop
            className="max-w-3xl mx-auto relative"
          >
            {['slider1.png', 'slider2.png', 'slider3.png'].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={`/images/${src}`}
                    alt={`Slide ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div
              ref={prevRef}
              className="swiper-button-prev absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-[#C0A578] w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />
            </div>
            <div
              ref={nextRef}
              className="swiper-button-next absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-[#C0A578] w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
