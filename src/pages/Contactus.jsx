import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-2">Get In Touch</h2>
        <p className="text-xl text-center text-gray-600 mb-12">We'd love to hear from you!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form>
              <div className="mb-6 relative">
                <input 
                  type="text" 
                  required 
                  className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-yellow-500 transition-colors bg-transparent"
                />
                <label className="absolute left-1 top-2 text-gray-500 transition-all duration-300 pointer-events-none">
                  Your Name
                </label>
              </div>
              <div className="mb-6 relative">
                <input 
                  type="email" 
                  required 
                  className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-yellow-500 transition-colors bg-transparent"
                />
                <label className="absolute left-1 top-2 text-gray-500 transition-all duration-300 pointer-events-none">
                  Email Address
                </label>
              </div>
              <div className="mb-6 relative">
                <textarea 
                  required 
                  rows="4"
                  className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-yellow-500 transition-colors bg-transparent resize-none"
                ></textarea>
                <label className="absolute left-1 top-2 text-gray-500 transition-all duration-300 pointer-events-none">
                  Your Message
                </label>
              </div>
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">Contact Information</h3>
            
            <div className="mb-8 flex items-start">
              <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1 mr-4" />
              <p className="text-lg">123 Food Street, Los Angeles, CA</p>
            </div>
            <div className="mb-8 flex items-start">
              <FaPhone className="text-yellow-500 text-xl mt-1 mr-4" />
              <p className="text-lg">(+234)9035-667-678</p>
            </div>
            <div className="mb-8 flex items-start">
              <FaEnvelope className="text-yellow-500 text-xl mt-1 mr-4" />
              <p className="text-lg">contact@eatout.com</p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
              <p className="mb-2">Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p className="mb-2">Saturday - Sunday: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;