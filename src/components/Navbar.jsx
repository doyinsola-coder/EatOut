import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white text-gray-900 shadow-lg py-2" 
          : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-yellow-600" : "text-yellow-500"
          }`}
        >
          Culinary
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <NavLink to="/" scrolled={scrolled}>Home</NavLink>
            <NavLink to="/menu" scrolled={scrolled}>Menu</NavLink>
            <NavLink to="/orders" scrolled={scrolled}>Orders</NavLink>
            <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
          </div>
          
          <Link 
            to="/cart" 
            className={`relative p-2 rounded-full transition-colors duration-300 ${
              scrolled 
                ? "bg-gray-100 hover:bg-gray-200" 
                : "bg-gray-900/30 hover:bg-gray-900/50"
            }`}
          >
            <ShoppingCart 
              size={22} 
              className={scrolled ? "text-gray-800" : "text-white"} 
            />
            
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <Link 
            to="/cart" 
            className={`relative p-2 rounded-full mr-2 transition-colors duration-300 ${
              scrolled 
                ? "bg-gray-100 hover:bg-gray-200" 
                : "bg-gray-900/30 hover:bg-gray-900/50"
            }`}
          >
            <ShoppingCart 
              size={20} 
              className={scrolled ? "text-gray-800" : "text-white"} 
            />
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              
            </span>
          </Link>
          
          <button
            className={`p-2 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? "bg-gray-100 hover:bg-gray-200 text-gray-800" 
                : "bg-gray-900/30 hover:bg-gray-900/50 text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-yellow-600">Culinary</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          
          <div className="flex flex-col py-6 px-4 space-y-6">
            <MobileNavLink to="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
            <MobileNavLink to="/menu" setIsOpen={setIsOpen}>Menu</MobileNavLink>
            <MobileNavLink to="/orders" setIsOpen={setIsOpen}>Orders</MobileNavLink>
            <MobileNavLink to="/contact" setIsOpen={setIsOpen}>Contact</MobileNavLink>
          </div>
          
          <div className="mt-auto p-4 border-t">
            <Link 
              to="/cart" 
              className="flex items-center space-x-2 text-gray-800 font-medium p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={20} />
              <span>Cart (3 items)</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ to, children, scrolled }) => (
  <Link 
    to={to} 
    className={`relative font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-yellow-500 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100 ${
      scrolled ? "text-gray-800 hover:text-yellow-600" : "text-white hover:text-yellow-400"
    }`}
  >
    {children}
  </Link>
);

// Mobile navigation link component
const MobileNavLink = ({ to, children, setIsOpen }) => (
  <Link 
    to={to}
    className="text-gray-800 text-lg font-medium hover:text-yellow-600 transition-colors"
    onClick={() => setIsOpen(false)}
  >
    {children}
  </Link>
);

export default Navbar;