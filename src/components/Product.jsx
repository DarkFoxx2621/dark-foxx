import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaGamepad, 
  FaRobot, 
  FaBullhorn, 
  FaCloud 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const offerings = [
  {
    title: "Web Development",
    description: "Responsive, modern websites that boost your online presence.",
    color: "from-blue-400 to-cyan-500",
    icon: <FaLaptopCode className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/web",
  },
  {
    title: "App Development",
    description: "Mobile apps for iOS and Android that engage your users.",
    color: "from-purple-500 to-pink-500",
    icon: <FaMobileAlt className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/app",
  },
  {
    title: "Game Development",
    description: "Interactive games to entertain and engage your audience.",
    color: "from-green-400 to-lime-500",
    icon: <FaGamepad className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/game",
  },
  {
    title: "AI / ML Solutions",
    description: "Intelligent solutions powered by artificial intelligence and machine learning.",
    color: "from-yellow-400 to-orange-500",
    icon: <FaRobot className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/aiml",
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand with targeted campaigns and analytics-driven marketing.",
    color: "from-pink-400 to-red-500",
    icon: <FaBullhorn className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/marketing",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services for modern businesses.",
    color: "from-indigo-400 to-blue-500",
    icon: <FaCloud className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/cloud",
  },
];

const Product = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center"
      >
        Our Offerings
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {offerings.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-gray-800 rounded-xl p-8 shadow-xl cursor-pointer overflow-hidden"
          >
            {/* Gradient Hover Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-2xl`}
            />

            {/* Icon */}
            <div className="relative z-10 flex justify-center">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative text-2xl font-bold text-white z-10 mb-2 text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-gray-300 mb-4 text-center">
              {item.description}
            </p>

            {/* "Read More" Button */}
            <motion.button
              onClick={() => navigate(item.link)}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-white to-gray-300 text-gray-900 font-semibold tracking-wide shadow-lg mx-auto block"
            >
              Read More
            </motion.button>

            {/* Decorative Shapes */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute w-20 h-20 rounded-full bg-white opacity-10 top-[-10%] left-[-10%]"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute w-24 h-24 rounded-full bg-white opacity-10 bottom-[-10%] right-[-10%]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Product;
