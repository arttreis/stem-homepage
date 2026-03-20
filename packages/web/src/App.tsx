import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Categories } from './components/Categories/Categories'
import { About } from './components/About/About'
import { ProductShelf } from './components/ProductShelf/ProductShelf'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Professionals } from './components/Professionals/Professionals'
import { Blog } from './components/Blog/Blog'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'
import { WhatsAppWidget } from './components/WhatsAppWidget/WhatsAppWidget'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <About />
        <ProductShelf />
        <Testimonials />
        <Professionals />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
