import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been submitted.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 md:px-10">
      <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 border border-gray-700 p-10 rounded-xl">

        {/* Contact Info Section */}
        <div className="flex-1 space-y-8 border-b md:border-b-0 md:border-r border-gray-600 pb-8 md:pb-0 md:pr-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Tell us a few words about your project or case, and we’ll get back to you promptly.
          </p>

          <div className="space-y-6">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
              <p><span className="text-white">Address:</span> Offira Business Hub, VIP Road, Vesu, Surat, India</p>
              <p><span className="text-white">Email:</span> darkfoxx2621@gmail.com</p>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Working Hours</h3>
              <p>Monday to Saturday: 9:30 AM - 6:30 PM</p>
              <p>Sunday: Closed</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-5 text-3xl mb-2">
                <a href="https://instagram.com" className="text-pink-600 hover:text-pink-700 transition-colors"><FaInstagram /></a>
                <a href="https://facebook.com" className="text-blue-900 hover:text-blue-800 transition-colors"><FaFacebookF /></a>
                <a href="https://twitter.com" className="text-blue-700 hover:text-blue-600 transition-colors"><FaTwitter /></a>
                <a href="https://youtube.com" className="text-red-700 hover:text-red-600 transition-colors"><FaYoutube /></a>

              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white h-32 resize-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2 text-gray-400 text-sm">
                <input type="checkbox" required className="accent-blue-400 mr-2" />
                I agree to the Terms & Conditions and Privacy Policy
              </label>
              <label className="flex items-center space-x-2 text-gray-400 text-sm">
                <input type="checkbox" className="accent-blue-400 mr-2" />
                I'm not a robot
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold p-4 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full md:w-40 mt-4"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>

      {/* Map Section */}
<div className="mt-16 w-full">

  {/* Centered Animated Heading */}
 <div className="w-full mb-12 flex items-center justify-center bg-gray-900">
  <motion.h2
    className="text-4xl md:text-5xl font-bold text-white relative inline-block"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Our <span className="text-blue-500 relative">
      Location
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full animate-pulse"></span>
    </span>
  </motion.h2>
</div>

  {/* Animated Map Container */}
  <motion.div
    className="w-full h-96 md:h-[50vh] rounded-xl overflow-hidden shadow-2xl border border-gray-700"
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2721396415113!2d72.79065957593504!3d21.141565483893253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be052059b56f01b%3A0xc21357cea26bf8db!2sOffira%20Business%20Hub%2C%20near%20bhagwan%20mahavir%20college%2C%20Surat%2C%20Gujarat%20395007!5e0!3m2!1sen!2sin!4v1758405138596!5m2!1sen!2sin"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </motion.div>
</div>
    </div>
    
  );
};

export default Contact;