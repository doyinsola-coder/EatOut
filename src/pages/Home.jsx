import React, { useEffect } from "react";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center"
          style={{ 
            filter: "brightness(0.4)",
            transform: "scale(1.1)",
          }}
          data-aos="zoom-out"
          data-aos-duration="2000"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-24 left-12 text-amber-300/30"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <Star className="w-16 h-16" />
        </div>
        <div 
          className="absolute bottom-32 right-16 text-amber-300/30"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <Star className="w-24 h-24" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center">
        <span 
          className="inline-block text-white/80 text-sm md:text-base tracking-wider uppercase mb-3"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Welcome to Culinary
        </span>
        
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Experience the Art of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">
            Fine Dining
          </span>
        </h1>
        
        <p 
          className="text-white/80 text-lg md:text-xl max-w-xl mb-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Indulge in an exquisite culinary journey crafted with passion, precision, and the finest ingredients.
        </p>
        
        {/* Awards/recognition indicators */}
        <div 
          className="flex items-center justify-center space-x-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="flex flex-col items-center">
            <div className="text-amber-300 flex">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-white/70 text-sm mt-1">Michelin Rated</span>
          </div>
          <div className="h-8 w-px bg-white/20"></div>
          <div className="text-white/70 text-sm">
            <span className="text-amber-300 text-lg font-semibold">4.9</span> Customer Rating
          </div>
          <div className="h-8 w-px bg-white/20"></div>
          <div className="text-white/70 text-sm">
            <span className="text-amber-300 text-lg font-semibold">12</span> Years of Excellence
          </div>
        </div>
        
        <div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          <Link to="/menu">
          <button 
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 px-6 py-3 text-lg shadow-lg flex items-center rounded-md group"
          >
            Explore Menu
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
          
          <button 
            className="border border-white text-white hover:bg-white/10 transition-all duration-300 px-6 py-3 text-lg rounded-md"
          >
            Make Reservation
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-offset="0"
      >
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-white/60 text-sm mb-2">Scroll</span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-white/60" />
          </div>
        </div>
      </div>

      {/* Featured showcase */}
      <div 
        className="absolute bottom-0 left-0 w-full"
        data-aos="fade-up" 
        data-aos-anchor-placement="top-bottom"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center mb-6 py-4 bg-black/40 backdrop-blur-sm rounded-t-lg">
            <div className="px-6 py-2 flex-1 text-center border-r border-white/10">
              <p className="text-white/70 text-xs uppercase tracking-wider">Featured Dish</p>
              <h3 className="text-white text-sm md:text-base">Truffle Risotto</h3>
            </div>
            <div className="px-6 py-2 flex-1 text-center border-r border-white/10">
              <p className="text-white/70 text-xs uppercase tracking-wider">Chef Special</p>
              <h3 className="text-white text-sm md:text-base">Sea Bass en Papillote</h3>
            </div>
            <div className="px-6 py-2 flex-1 text-center">
              <p className="text-white/70 text-xs uppercase tracking-wider">Opening Hours</p>
              <h3 className="text-white text-sm md:text-base">12pm - 10pm Daily</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;