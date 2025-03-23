import React from 'react';
import { Link } from 'react-router';
const LandingPage = () => {
  return (
    <div className="landing-page">
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <img src="/hero1.avif" alt="Delicious Food" className="hero-image" />
        <div className="hero-content">
          <h1>Delicious Food for Every Mood</h1>
          <p>Experience the finest flavors delivered straight to your doorstep</p>
          <div className="hero-buttons">
            <button className="btn-primary">Order Now</button>
            <button className="btn-secondary">View Menu</button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="feature-container">
          <div className="feature">
            <img src="/qf1.avif" alt="Quality Food" className="delivery-image" />
            <h3>Quality Food</h3>
            <p>Made with premium ingredients and prepared by expert chefs</p>
          </div>
          <div className="feature">
            <img src="/dimg1.avif" alt="Fast Delivery" className="delivery-image" />
            <h3>Fast Delivery</h3>
            <p>Quick delivery to your doorstep in less than 30 minutes</p>
          </div>
          <div className="feature">
            <img src="/dp1.avif" alt="Best Prices" className="delivery-image" />
            <h3>Best Prices</h3>
            <p>Affordable meals without compromising on quality or taste</p>
          </div>
        </div>
      </section>
      
      {/* Popular Dishes Section */}
      <section className="popular-dishes" id="menu">
        <div className="section-heading">
          <h2>Our Popular Dishes</h2>
          <p>Discover our customers' favorites</p>
        </div>
        
        <div className="dishes-container">
          <div className="dish-card">
            <img src="/scp1.avif" alt="Spicy Chicken Pasta" className="dish-image" />
            <div className="dish-info">
              <h3>Spicy Chicken Pasta</h3>
              <p>Tender chicken with creamy pasta and a hint of spice</p>
              <div className="dish-meta">
                <span className="dish-price">$12.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          
          <div className="dish-card">
            <img src="/burger.jpg" alt="Classic Beef Burger" className="dish-image" />
            <div className="dish-info">
              <h3>Classic Beef Burger</h3>
              <p>Juicy beef patty with fresh veggies and special sauce</p>
              <div className="dish-meta">
                <span className="dish-price">$10.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          
          <div className="dish-card">
            <img src="/pizza.jpg" alt="Margherita Pizza" className="dish-image" />
            <div className="dish-info">
              <h3>Margherita Pizza</h3>
              <p>Traditional pizza with tomato, mozzarella, and fresh basil</p>
              <div className="dish-meta">
                <span className="dish-price">$14.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          
          <div className="dish-card">
            <img src="/salad.jpg" alt="Garden Fresh Salad" className="dish-image" />
            <div className="dish-info">
              <h3>Garden Fresh Salad</h3>
              <p>Crisp vegetables with our homemade vinaigrette dressing</p>
              <div className="dish-meta">
                <span className="dish-price">$8.99</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="view-all">
          <Link to="/menu" >
          <button className="btn-secondary">View All Menu</button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us" id="about">
        <div className="section-heading">
          <h2>Our Story</h2>
          <p>How TastyBites came to be</p>
        </div>
        
        <div className="about-container">
          <img src="/images/about-us.jpg" alt="About Us" className="about-image" />
          <div className="about-content">
            <h3>Passion for Good Food</h3>
            <p>Founded in 2020, TastyBites began with a simple mission: to bring delicious, quality food to food lovers everywhere.</p>
            <p>We believe that good food brings people together. That's why we source only the freshest ingredients and prepare each dish with care.</p>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-heading">
          <h2>What Our Customers Say</h2>
          <p>Hear from our satisfied customers</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src="/images/customer-1.jpg" alt="John Doe" className="testimonial-avatar" />
            <div className="testimonial-text">
              <p>"The food is always fresh and delicious. The delivery is prompt, and the staff is friendly."</p>
              <h4>John Doe</h4>
              <span>Regular Customer</span>
            </div>
          </div>
          
          <div className="testimonial-card">
            <img src="/images/customer-2.jpg" alt="Jane Smith" className="testimonial-avatar" />
            <div className="testimonial-text">
              <p>"I love their daily specials! The weekend family combo is perfect for our movie nights."</p>
              <h4>Jane Smith</h4>
              <span>Food Enthusiast</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-heading">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you</p>
        </div>
        
        <div className="contact-container">
          <img src="/images/contact.jpg" alt="Contact Us" className="contact-image" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <img src="/images/newsletter.jpg" alt="Newsletter" className="newsletter-image" />
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get updates on special offers, new menu items, and exclusive deals.</p>
            <form className="newsletter-form-inline">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default LandingPage;
