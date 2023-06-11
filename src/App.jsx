
import Navbar from '../src/components/navbar.jsx'
import Footer from '../src/components/footer.jsx'
import './components/app.css'
import Homepage from './homepage.jsx'
import Portfolio from '../src/components/portfolio.jsx'
import { Route,  Routes } from 'react-router-dom'
import SingleProject from '../src/components/singleproject.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/project' element={<SingleProject />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
