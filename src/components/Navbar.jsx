import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <h1>Eat<span>Out</span></h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu (Collapsible on Mobile) */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li className="nav-item"><Link to="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Order Now Button */}
        <div className="nav-right">
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
