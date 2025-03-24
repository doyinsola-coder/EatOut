import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Youtube, link: "#", label: "YouTube" }
  ];
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Specials", path: "/specials" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" }
  ];
  
  const footerPolicies = [
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" }
  ];
  
  // Animation variants for reuse
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold">
              Culi<span className="text-yellow-500">nary</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Delicious food delivered to your doorstep. We focus on quality
              ingredients and authentic flavors to bring joy to your dining
              experience.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.p 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Foodie Street, Flavor Town, NY 10001</span>
              </motion.p>
              <motion.p 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="tel:+2349035667678" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  (+234) 9035-667-678
                </a>
              </motion.p>
              <motion.p 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@culinary.com" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  info@culinary.com
                </a>
              </motion.p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              Newsletter
            </h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
              <motion.button
                type="submit"
                className="bg-yellow-500 px-4 py-3 rounded-lg text-black font-semibold hover:bg-yellow-600 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-gray-400">&copy; {currentYear} Culinary. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {footerPolicies.map((policy, index) => (
              <a
                key={index}
                href={policy.path}
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm"
              >
                {policy.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;