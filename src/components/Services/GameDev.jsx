import React from "react";
import { motion } from "framer-motion";
import { Gamepad, Cpu, Rocket, Globe } from "lucide-react";

const gameServices = [
  {
    icon: <Gamepad className="w-12 h-12 text-blue-500" />,
    title: "Game Design",
    desc: "Creative and immersive game design for engaging experiences.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-500" />,
    title: "Game Development",
    desc: "High-performance games built for desktop, mobile, and console.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: "Optimization",
    desc: "Optimized graphics and gameplay for smooth performance.",
  },
  {
    icon: <Globe className="w-12 h-12 text-pink-500" />,
    title: "Multiplayer Integration",
    desc: "Connect players globally with stable multiplayer systems.",
  },
];

const GameDev = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 md:px-20 py-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-6 relative z-10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Game <span className="text-blue-500">Development</span>
      </motion.h1>

      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full relative z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We create immersive, high-quality games that deliver exciting and
        engaging experiences on multiple platforms.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {gameServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-800/70 transition-all text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-500 hover:to-pink-600 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/30">
          Start Your Game Project
        </button>
      </motion.div>
    </div>
  );
};

export default GameDev;
