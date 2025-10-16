import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaGem,
  FaStore,
  FaTruck,
  FaChartLine,
  FaHeartbeat,
} from "react-icons/fa";

const IndustryServe = () => {
  const industries = [
    {
      title: "Insurance",
      icon: <FaShieldAlt />,
      description:
        "Seamless policy management and claims processing for a stress-free customer experience in the insurance industry.",
    },
    {
      title: "Diamond",
      icon: <FaGem />,
      description:
        "Efficient inventory tracking and sales management solution for businesses in the diamond industry.",
    },
    {
      title: "Retail",
      icon: <FaStore />,
      description:
        "Streamline retail and eCommerce operations with our efficient software for order, payment, and inventory management.",
    },
    {
      title: "Logistics",
      icon: <FaTruck />,
      description:
        "Optimize supply chain processes with our powerful software for streamlined order tracking and management.",
    },
    {
      title: "Fintech",
      icon: <FaChartLine />,
      description:
        "Driving the fintech sector forward with smart, secure, and scalable technology solutions for smooth transactions and business growth.",
    },
    {
      title: "Healthcare",
      icon: <FaHeartbeat />,
      description:
        "Empowering the healthcare sector with innovative software solutions for seamless operations, improved efficiency, and better patient care.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-900 text-gray-100 py-20 px-6">
      {/* Animated Gray Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 opacity-70"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-100 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Industries We Serve
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-400 flex flex-col items-center text-center"
            >
              {/* Icon Popup Animation */}
              <motion.div
                className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-600 to-gray-700 text-4xl mb-6 shadow-lg"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {industry.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryServe;
