import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Location from './pages/Locations/Location'
import Contact from './pages/ContactUs/Contact'

const App = () => {
  return (
    <>

<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/about/location" element={<Location />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  )
}

export default App