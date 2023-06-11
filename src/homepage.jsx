
import About from '../src/components/about.jsx'
import Photo from '../src/components/photo.jsx'
import Products from '../src/components/products.jsx'
import Offer from '../src/components/offer.jsx'
import './components/app.css'

function Homepage() {

  return (
    <>
      <Photo/>
      <About/>
      <Products/>
      <Offer/>
    </>
  )
}

export default Homepage
