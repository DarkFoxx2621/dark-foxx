import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* ================== Animated Gradient Background ================== */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-gradient-bg z-0" />

      {/* ================== Particle Network ================== */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], x: [0, 20, -20, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 shadow-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================== Main Content ================== */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-24 py-24 md:py-32 space-y-16 text-white">

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-blue-500">Us</span>
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-base md:text-lg max-w-3xl leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          InFinite is an IT services company in Surat, Gujarat, India. We deliver web and mobile apps, software development, cloud computing, and IT consulting services worldwide with a focus on innovation, quality, and client success.
        </motion.p>

        {/* ================== Services Section ================== */}
        <section className="w-full flex flex-col items-center justify-center space-y-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What We Provide
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">Software Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Custom web and mobile applications designed for performance, scalability, and efficiency.
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">Cloud Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Deploying secure cloud infrastructures to streamline business operations worldwide.
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">IT Consulting</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert advice to optimize technology adoption and achieve long-term business success.
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ================== Mission Section with Dark Gray Background ================== */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 md:px-24 py-24 md:py-32 space-y-8 bg-gray-900">
        {/* Optional animated particles for this section */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0], x: [0, 15, -15, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 shadow-lg"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white z-10 relative"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission & Goals
        </motion.h2>

        <motion.p
          className="text-base md:text-lg max-w-4xl leading-relaxed text-gray-300 z-10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Our mission is to empower businesses in India and globally through high-quality IT services. We focus on innovative solutions, technological growth, and client satisfaction.
        </motion.p>

        <motion.div
          className="space-y-4 max-w-3xl text-left text-gray-300 text-base md:text-lg z-10 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p>🌏 Expanding services to clients across India and international markets.</p>
          <p>🚀 Delivering innovative and reliable IT solutions for business growth.</p>
          <p>🤝 Building long-term partnerships with client-focused strategies.</p>
        </motion.div>
      </section>

      {/* ================== Gradient Animation Styles ================== */}
      <style>
        {`
          @keyframes gradient-bg {
            0%,100% {background-position: 0% 50%}
            50% {background-position: 100% 50%}
          }
          .animate-gradient-bg {
            background-size: 200% 200%;
            animation: gradient-bg 20s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default About;
