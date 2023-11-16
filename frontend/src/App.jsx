import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services/Services'
import Track from './pages/Track/Track'
import Shipping from './pages/Shipping/Shipping'

const App = () => {
  return (
    <>

<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/services' element={<Services />} />
  <Route path='/track' element={<Track />} />
  <Route path='/shipping' element={<Shipping />} />
</Routes>
    </>
  )
}

export default App