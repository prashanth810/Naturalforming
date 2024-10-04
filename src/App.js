import React from 'react';
import Vegitables from './components/veg/Vegitables'
import { Route, Routes } from 'react-router-dom'
import Singlepage from './components/single page/Singlepage'
import Homepage from './components/Homepage'
import Navbarforall from './components/homenavbar/Navbarforall';
import Allproductsfv from './components/allproducts/Allproductsfv';
import About from './components/about/About';
import Feactures from './components/feactures/Feactures';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>

      <Navbarforall />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/allfruits' element={<Allproductsfv />} />

        <Route path='/about' element={<About />} />
        <Route path='/feactires' element={<Feactures />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fruits/:id' element={<Singlepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
