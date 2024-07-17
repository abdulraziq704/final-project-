 import React from 'react'
 import Navbar from './components/Navbar'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cartpage from './pages/Cartpage'
import Shop from './pages/Shop'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import AdminPanel from './pages/AdminPanel'
 
function App() {
 
  return (
    <> 
     <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={< Cartpage/>}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/product/:ID" element={<ProductDetail />} /> 
 
 

        </Routes>
        <Footer/>
       </BrowserRouter>
   
    </>
  )
}

export default App
