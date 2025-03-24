// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  LocateIcon,
  PhoneIcon,
  LetterTextIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <motion.div
          className="space-y-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold">Culi<span className="text-yellow-500">nary</span></h2>
          <p className="text-gray-400">
            Delicious food delivered to your doorstep. We focus on quality
            ingredients and authentic flavors to bring joy to your dining
            experience.
          </p>
          <div className="flex space-x-4">
            {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Menu", "Specials", "About Us", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <LocateIcon size={20} className="text-yellow-500" />
            <span>123 Foodie Street, Flavor Town</span>
          </p>
          <p className="flex items-center space-x-2">
            <PhoneIcon size={20} className="text-yellow-500" />
            <span>(+234) 9035-667-678</span>
          </p>
          <p className="flex items-center space-x-2">
            <LetterTextIcon size={20} className="text-yellow-500" />
            <span>info@culinary.com</span>
          </p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="text-gray-400">
            Subscribe to our newsletter for special offers and updates.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-lg text-gray-900"
              required
            />
            <motion.button
              type="submit"
              className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-600 transition"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} EatOut. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-400 hover:text-yellow-500 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;