import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We'd love to hear from you!</p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <div className="input-group">
                <input type="text" required />
                <label>Your Name</label>
              </div>
              <div className="input-group">
                <input type="email" required />
                <label>Email Address</label>
              </div>
              <div className="input-group">
                <textarea required></textarea>
                <label>Your Message</label>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Food Street, Los Angeles, CA</p>
            </div>
            <div className="info-box">
              <FaPhone className="info-icon" />
              <p>(+234)9035-667-678</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <p>contact@eatout.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
