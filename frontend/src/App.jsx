import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Location from './pages/Locations/Location'
import Contact from './pages/ContactUs/Contact'
import Services from './pages/Services/Services'
import Track from './pages/Track/Track'
import Shipping from './pages/Shipping/Shipping'
import Storage from './pages/Storage/Storage'
import Footer from './components/Footer'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <>

<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/location" element={<Location />} />
  <Route path="/contact" element={<Contact />} />
  <Route path='/services' element={<Services />} />
  <Route path='/track' element={<Track />} />
  <Route path='/shipping' element={<Shipping />} />
  <Route path='/storage' element={<Storage/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
<Footer/>
    </>
  )
}

export default App