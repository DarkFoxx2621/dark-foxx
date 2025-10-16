import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const services = [
  "Website Development",
  "App Development",
  "Game Development",
  "AI / ML Development",
  "Digital Marketing",
  "Cloud Services",
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
   const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

     // ✅ Function to handle Get Started button click
  const handleServicesClick = () => {
    navigate("/services");
  };

     // ✅ Function to handle Learn More button click
  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden pt-16"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-gradient-bg z-0" />

        {/* Particle Network */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -30, 0], x: [0, 20, -20, 0] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30 shadow-lg"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 sm:px-12 lg:px-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg"
          >
            Transform Your Business With
          </motion.h1>

          {/* 3D-like Service Carousel */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -30, rotateX: 15 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-8 min-h-[3rem] drop-shadow-xl"
          >
            {services[current]}
          </motion.div>

          {/* Buttons - Always Horizontal */}
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #7f5af0" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleServicesClick}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAboutClick}
              className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl z-20 flex flex-col items-center"
        >
          <span className="text-3xl animate-bounce">↓</span>
          <span className="text-sm mt-1">Scroll Down</span>
        </motion.div>

        {/* Background Gradient Animation */}
        <style>
          {`
            @keyframes gradient-bg {
              0%,100%{background-position:0% 50%}
              50%{background-position:100% 50%}
            }
            .animate-gradient-bg {
              background-size: 200% 200%;
              animation: gradient-bg 20s ease infinite;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default HomePage;
