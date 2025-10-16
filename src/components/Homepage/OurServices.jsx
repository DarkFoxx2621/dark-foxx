import React, { useLayoutEffect } from "react";
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

const services = [
  { 
    title: "Website Development", 
    description: "Build responsive, modern websites tailored to your business needs.", 
    color: "from-blue-400 to-cyan-500",
    icon: <FaLaptopCode className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/web"
  },
  { 
    title: "App Development", 
    description: "Create powerful mobile apps for iOS and Android platforms.", 
    color: "from-purple-500 to-pink-500",
    icon: <FaMobileAlt className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/app"
  },
  { 
    title: "Game Development", 
    description: "Design engaging and interactive games for all age groups.", 
    color: "from-green-400 to-lime-500",
    icon: <FaGamepad className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/game"
  },
  { 
    title: "AI / ML Development", 
    description: "Implement intelligent solutions with AI and machine learning.", 
    color: "from-yellow-400 to-orange-500",
    icon: <FaRobot className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/aiml"
  },
  { 
    title: "Digital Marketing", 
    description: "Boost your brand presence with targeted marketing strategies.", 
    color: "from-pink-400 to-red-500",
    icon: <FaBullhorn className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/marketing"
  },
  { 
    title: "Cloud Services", 
    description: "Secure and scalable cloud solutions for your business.", 
    color: "from-indigo-400 to-blue-500",
    icon: <FaCloud className="w-10 h-10 text-white mb-4 mx-auto" />,
    link: "/services/cloud"
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  // Scroll to top immediately before render
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (link) => {
    // Small delay to allow scroll to finish before navigating
    window.scrollTo({ top: 0, behavior: "auto" });
    setTimeout(() => {
      navigate(link);
    }, 50); // 50ms is enough
  };

  return (
    <section className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-start py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-gray-800 rounded-xl p-8 shadow-xl cursor-pointer overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-2xl`}
            />

            <div className="relative z-10 flex justify-center">{service.icon}</div>

            <h3 className="relative text-2xl font-bold text-white z-10 mb-2 text-center">
              {service.title}
            </h3>

            <p className="relative z-10 text-gray-300 mb-4 text-center">
              {service.description}
            </p>

            <motion.button
              onClick={() => handleNavigate(service.link)}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-white to-gray-300 text-gray-900 font-semibold tracking-wide shadow-lg hover:from-white hover:to-gray-100 transition-all duration-300 mx-auto block"
            >
              Read More
            </motion.button>

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

export default OurServices;
