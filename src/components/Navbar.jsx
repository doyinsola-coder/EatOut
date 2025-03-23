import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    // Load cart count from localStorage
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Eat<span>Out</span></h1>
        </div>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          
         <Link to="/signup">
         <button className="order-btn">Sign up</button>
         </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
