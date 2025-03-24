import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Star, Menu, X, Clock, MapPin, Phone, Instagram, Facebook, Twitter , ArrowDownIcon} from "lucide-react";
import { Link } from "react-router";

// Main App Component
const RestaurantWebsite = () => {
  return (
    <div className="font-sans text-gray-900">
    
      <Hero />
      <AboutSection />
      <MenuHighlights />
      <ChefsSection />
      <Testimonials />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
    
    </div>
  );
};



// Enhanced Hero Section
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 bg-black">
        <div 
          className={`absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center transition-transform duration-[2s] ${isLoaded ? 'scale-100 brightness-50' : 'scale-110 brightness-0'}`}
          style={{ 
            transform: isLoaded ? 'scale(1.05)' : 'scale(1.2)',
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-24 left-12 text-amber-300/30 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <Star className="w-16 h-16" />
        </div>
        <div 
          className={`absolute bottom-32 right-16 text-amber-300/30 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <Star className="w-24 h-24" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center">
        <span 
          className={`inline-block text-white/80 text-sm md:text-base tracking-wider uppercase mb-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Welcome to Culinary
        </span>
        
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '400ms' }}
        >
          Experience the Art of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">
            Fine Dining
          </span>
        </h1>
        
        <p 
          className={`text-white/80 text-lg md:text-xl max-w-xl mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms' }}
        >
          Indulge in an exquisite culinary journey crafted with passion, precision, and the finest ingredients.
        </p>
        
        {/* Awards/recognition indicators */}
        <div 
          className={`flex items-center justify-center space-x-8 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '700ms' }}
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
          className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '800ms' }}
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
             <ArrowDownIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '1200ms' }}
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
        className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center mb-0 py-4 bg-black/40 backdrop-blur-sm rounded-t-lg">
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

// New About Section
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div 
              className={`rounded-lg overflow-hidden shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
            >
              <img 
                src="/interior.avif" 
                alt="Restaurant Interior" 
                className="w-full h-auto"
                onError={(e) => e.target.src = "/api/placeholder/600/400"}
              />
            </div>
            <div 
              className={`absolute -bottom-8 -right-8 bg-amber-300 p-6 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
            >
              <span className="text-3xl font-bold">12</span>
              <span className="text-sm">Years of Excellence</span>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span 
              className={`inline-block text-amber-500 text-sm font-medium tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Our Story
            </span>
            
            <h2 
              className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              A Passion for Extraordinary Flavors
            </h2>
            
            <p 
              className={`text-gray-600 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Founded in 2011, Culinary has established itself as a destination for food enthusiasts seeking exceptional dining experiences. Our chef-driven menu features seasonal ingredients sourced from local farms and producers, transformed into artistic culinary creations.
            </p>
            
            <p 
              className={`text-gray-600 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Each dish tells a story of tradition, innovation, and meticulous attention to detail. We're committed to providing not just a meal, but a memorable journey through flavors, textures, and presentation.
            </p>
            
            <div 
              className={`flex space-x-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">12K+</div>
                <div className="text-gray-500 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">250+</div>
                <div className="text-gray-500 text-sm">Unique Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">18</div>
                <div className="text-gray-500 text-sm">Expert Chefs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Menu Highlights
const MenuHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Seared Scallops",
          description: "Pan-seared scallops with cauliflower purée and brown butter",
          price: "$18"
        },
        {
          name: "Burrata",
          description: "Fresh burrata with heirloom tomatoes, basil oil, and toasted pine nuts",
          price: "$16"
        }
      ]
    },
    {
      name: "Mains",
      items: [
        {
          name: "Truffle Risotto",
          description: "Arborio rice cooked with porcini mushrooms, finished with black truffle",
          price: "$28"
        },
        {
          name: "Sea Bass en Papillote",
          description: "Baked sea bass with seasonal vegetables and herbs",
          price: "$34"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with vanilla bean ice cream",
          price: "$14"
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla bean crème brûlée with caramelized sugar crust",
          price: "$12"
        }
      ]
    }
  ];

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-amber-500 text-sm font-medium tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Culinary Excellence
          </span>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Signature Menu Selections
          </h2>
          
          <p 
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Explore our carefully curated menu featuring seasonal ingredients and innovative techniques. Each dish is crafted to provide a memorable dining experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div 
              key={category.name}
              className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center relative">
                <span className="relative z-10">{category.name}</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-300"></span>
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <span className="text-amber-500 font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-amber-500 font-medium inline-flex items-center hover:text-amber-600 transition-colors">
                  View Full Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Chefs Section
const ChefsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const chefs = [
    {
      name: "Aroundato abdulrahman",
      title: "Executive Chef",
      bio: "With over 20 years of experience in Michelin-starred restaurants across Europe, Chef Aroundato brings unparalleled expertise and creativity to our kitchen.",
      image: "/chef1.avif"
    },
    {
      name: "Fatimah Hamzah",
      title: "Pastry Chef",
      bio: "A master of sweet creations, Fatimah combines classic techniques with innovative flavors to create desserts that are both beautiful and delicious.",
      image: "/chef2.jpg"
    },
    {
      name: "Muthmainah Apaokagi",
      title: "Sous Chef",
      bio: "Chef Wuraola specializes in fusion cuisine, blending Eastern and Western culinary traditions to create uniquely memorable dining experiences.",
      image: "/chef3.jpg"
    }
  ];

  return (
    <section id="chefs" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-amber-500 text-sm font-medium tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Culinary Artists
          </span>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Meet Our Expert Chefs
          </h2>
          
          <p 
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            The talented individuals behind our extraordinary cuisine bring passion, expertise, and creativity to every dish they create.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div 
              key={chef.name}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => e.target.src = "/api/placeholder/400/500"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">{chef.name}</h3>
                    <p className="text-amber-300">{chef.title}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
              <p className="text-amber-500 font-medium mb-3">{chef.title}</p>
              <p className="text-gray-600">{chef.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  
  const testimonials = [
    {
      quote: "The most memorable dining experience I've had in years. Every dish was a work of art, and the flavors were absolutely extraordinary.",
      name: "Aishah Muhammad",
      title: "Product Designer"
    },
    {
      quote: "Culinary exceeded all our expectations. The attention to detail, the impeccable service, and of course, the sublime food made our anniversary celebration truly special.",
      name: "Fatimah ....",
      title: "CSO FAS Yoghurt Haven"
    },
    {
      quote: "As someone who dines out frequently, I can confidently say that Culinary offers one of the most refined and innovative dining experiences in the city.",
      name: "Abu Abdullah",
      title: "Fashion Designer"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, testimonials.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-amber-400 text-sm font-medium tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Guest Experiences
          </span>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            What Our Guests Say
          </h2>
        </div>
        
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 absolute inset-0 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="text-5xl text-amber-400 mb-6">"</div>
                <p className="text-xl md:text-2xl italic mb-8">{testimonial.quote}</p>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-amber-400">{testimonial.title}</div>
              </div>
            ))}
            
            {/* This div ensures the container maintains its height */}
            <div className="invisible">
              <div className="text-5xl text-amber-400 mb-6">"</div>
              <p className="text-xl md:text-2xl italic mb-8">{testimonials[0].quote}</p>
              <div className="font-semibold text-lg">{testimonials[0].name}</div>
              <div className="text-amber-400">{testimonials[0].title}</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-amber-400 scale-125' : 'bg-gray-600'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Gallery images would normally use real paths
  const images = [
    { src: "/dish1.avif", alt: "Signature Dish 1" },
    { src: "/interior.avif", alt: "Restaurant Interior" },
    { src: "/dish2.avif", alt: "Signature Dish 2" },
    { src: "/chef-cooking.avif", alt: "Chef in Action" },
    { src: "/dessert1.avif", alt: "Signature Dessert" },
    { src: "/dining area.avif", alt: "Dining area" },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-amber-500 text-sm font-medium tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Visual Journey
          </span>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Our Culinary Gallery
          </h2>
          
          <p 
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Feast your eyes on our culinary creations and elegant ambiance through these captivating images.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-lg shadow-md group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => e.target.src = "/api/placeholder/400/300"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reservation Section
const ReservationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
          >
            <span className="inline-block text-amber-500 text-sm font-medium tracking-wider uppercase mb-2">
              Reserve Your Table
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book an Unforgettable Dining Experience
            </h2>
            
            <p className="text-gray-600 mb-8">
              Secure your spot for an extraordinary culinary journey. Whether it's a romantic dinner, family celebration, or business gathering, we're ready to make your occasion special.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <Clock className="text-amber-500 mr-4 h-5 w-5" />
                <div>
                  <h4 className="font-medium">Opening Hours</h4>
                  <p className="text-gray-600 text-sm">Monday - Sunday: 12pm - 10pm</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-amber-500 mr-4 h-5 w-5" />
                <div>
                  <h4 className="font-medium">Reservations</h4>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-amber-500 mr-4 h-5 w-5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 text-sm">123 Gourmet Street, Culinary City</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 bg-white rounded-lg shadow-xl p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Make a Reservation</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
                    Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="time">
                    Time
                  </label>
                  <select 
                    id="time" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select Time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="guests">
                  Number of Guests
                </label>
                <select 
                  id="guests" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7+">7+ People</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="special-requests">
                  Special Requests
                </label>
                <textarea 
                  id="special-requests" 
                  rows="3" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-amber-400 text-sm font-medium tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Get in Touch
          </span>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Contact Us
          </h2>
          
          <p 
            className={`text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            We'd love to hear from you. For reservations, inquiries, or feedback, please use the form below or contact us directly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="contact-name">
                  Name
                </label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="contact-email">
                  Email
                </label>
                <input 
                  type="email" 
                  id="contact-email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="contact-subject">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="contact-message">
                  Message
                </label>
                <textarea 
                  id="contact-message" 
                  rows="5" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-amber-400 mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-medium text-white mb-1">Location</h4>
                  <p className="text-gray-400">123 Gourmet Street<br />Culinary City, CC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-amber-400 mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-medium text-white mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-amber-400 mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-medium text-white mb-1">Hours</h4>
                  <p className="text-gray-400">
                    Monday - Sunday: 12pm - 10pm<br />
                    Bar: 11am - 11pm
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-800 rounded-lg">
              <h4 className="font-medium text-white mb-3">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500 text-white"
                  placeholder="Your email"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantWebsite;