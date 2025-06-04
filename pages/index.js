import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import DeliveryArea from '../components/DeliveryArea'
import OrderForm from '../components/OrderForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="tentang"><Hero /></section>
        <WhyUs />
        <DeliveryArea />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
