import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'  
import Allmenu from './pages/Allmenu'
import { Link } from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Allmenu/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
