import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaWordpress, FaShopify, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaPhp, FaAws
} from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiFirebase, SiFlutter, SiReact, SiTailwindcss, SiNextdotjs, SiVercel } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
  { name: "Shopify", icon: <FaShopify className="text-green-500" /> },
  { name: "React Native", icon: <SiReact className="text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    // ✅ Newly Added
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Complete", value: "10+" },
  { label: "Winning Awards", value: "2" },
];

const Technology = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 bg-black overflow-hidden flex flex-col items-center">

      {/* Galaxy Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
        style={{
          background: `radial-gradient(circle at 20% 30%, #1a1a2e, transparent 40%), 
                       radial-gradient(circle at 80% 70%, #162447, transparent 40%)`,
          zIndex: 0,
        }}
      />

      {/* Stars */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Moon */}
      <motion.div
        className="absolute rounded-full bg-gray-400"
        style={{
          width: 80,
          height: 80,
          top: "10%",
          left: "80%",
          boxShadow: "0 0 20px 5px rgba(255,255,255,0.3)",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative text-4xl md:text-5xl font-extrabold text-white mb-20 text-center z-10"
      >
        Technologies We Use
      </motion.h2>

      {/* Tech Slider */}
      <div className="w-full overflow-hidden relative mb-24 z-10">
        <motion.div
          className="flex space-x-16 md:space-x-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center w-24 md:w-32"
            >
              <motion.div 
                whileHover={{ scale: 1.4, textShadow: "0 0 20px #fff" }}
                className="text-4xl md:text-6xl mb-3"
              >
                {tech.icon}
              </motion.div>
              <span className="text-white text-sm md:text-base font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-6xl text-center z-10 relative">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
          >
            <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
            <span className="text-gray-300 text-lg md:text-xl">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
