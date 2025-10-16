import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Database, Lock, Server, Globe } from "lucide-react";

// Cloud Services Data
const services = [
  {
    icon: <Cloud className="w-12 h-12 text-blue-500" />,
    title: "Cloud Migration",
    desc: "Seamless migration of applications and data to the cloud.",
  },
  {
    icon: <Database className="w-12 h-12 text-green-500" />,
    title: "Data Management",
    desc: "Secure storage and efficient management of business data.",
  },
  {
    icon: <Server className="w-12 h-12 text-purple-500" />,
    title: "Cloud Infrastructure",
    desc: "Scalable and reliable cloud infrastructure for your business.",
  },
  {
    icon: <Lock className="w-12 h-12 text-pink-500" />,
    title: "Cloud Security",
    desc: "Advanced security protocols to protect cloud-based solutions.",
  },
  {
    icon: <Globe className="w-12 h-12 text-yellow-500" />,
    title: "Global Deployment",
    desc: "Deploy cloud solutions across multiple regions worldwide.",
  },
    {
    icon: <Globe className="w-12 h-12 text-indigo-500" />,
    title: "Hosting",
    desc: "Reliable web hosting services with high uptime and fast performance.",
  },
];

const CloudSolutions = () => {
  const carouselRef = useRef();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 sm:px-10 md:px-20 py-20 overflow-hidden">
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 relative z-10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Cloud <span className="text-blue-500">Solutions</span>
      </motion.h1>

      {/* Divider */}
      <motion.div
        className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full relative z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Description */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 relative z-10 px-2 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We provide secure, scalable, and cost-effective cloud solutions that
        empower your business to operate efficiently in the digital era.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        ref={carouselRef}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-800/70 transition-all text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16 sm:mt-20 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-500 hover:to-pink-600 rounded-lg text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/30">
          Explore Cloud Solutions
        </button>
      </motion.div>
    </div>
  );
};

export default CloudSolutions;
