import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: 'Apa itu UPNExpress?',
    answer: 'UPNExpress adalah layanan pengiriman cepat, murah, dan terjangkau khusus untuk area kampus.',
  },
  {
    question: 'Bagaimana cara pesan?',
    answer: 'Langsung isi form atau klik tombol WhatsApp.',
  },
  {
    question: 'Siapa yang bisa menggunakan layanan?',
    answer: 'Layanan ini tersedia untuk mahasiswa dan mitra yang berada di sekitar kampus.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="py-20 bg-white px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 shadow-sm transition-all bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                  {activeIndex === index ? (
                    <MinusIcon className="w-4 h-4" />
                  ) : (
                    <PlusIcon className="w-4 h-4" />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700 text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
