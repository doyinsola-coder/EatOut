import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'  
import Allmenu from './pages/Allmenu'
import { Link } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Allmenu/>} />
      <Route path="/about" element={<AboutUs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
