// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>Eat<span>Out</span></h2>
          <p>
            Delicious food delivered to your doorstep. We focus on quality ingredients
            and authentic flavors to bring joy to your dining experience.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="facebook">FB</i>
            </a>
            <a href="#" className="social-icon">
              <i className="instagram">IG</i>
            </a>
            <a href="#" className="social-icon">
              <i className="twitter">TW</i>
            </a>
            <a href="#" className="social-icon">
              <i className="youtube">YT</i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="icon-location"></i> 123 Foodie Street, Flavor Town</p>
          <p><i className="icon-phone"></i> (123) 456-7890</p>
          <p><i className="icon-email"></i> info@tastybites.com</p>
          <div className="hours">
            <h4>Opening Hours</h4>
            <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for special offers and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TastyBites. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;