import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Eat<span>Out</span></h1>
        </div>
        
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/menu" className="nav-link">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#specials" className="nav-link">Specials</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;