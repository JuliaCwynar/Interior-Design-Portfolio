
import Navbar from '../src/components/navbar.jsx'
import About from '../src/components/about.jsx'
import Photo from '../src/components/photo.jsx'
import Footer from '../src/components/footer.jsx'
import Products from '../src/components/products.jsx'
import Offer from '../src/components/offer.jsx'
import './components/app.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Photo/>
      <About/>
      <Products/>
      <Offer/>
      <Footer/>
    </>
  )
}

export default App
