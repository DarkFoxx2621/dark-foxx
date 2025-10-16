import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const links = [
    { label: "Home", to: "/" },
    {
      label: "Services",
      to: "/services",
      dropdown: [
        { label: "Web Development", to: "/services/web" },
        { label: "App Development", to: "/services/app" },
        { label: "Cloud Solutions", to: "/services/cloud" },
        { label: "Game Development", to: "/services/game" },
        { label: "AI/ML Development", to: "/services/aiml" },
      ],
    },
    { label: "Products", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const handleNavigation = (to) => {
    setHovered(null); // close dropdown
    setOpen(false);   // close mobile menu
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    navigate(to);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tight cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <span className="text-gray-500">DARKFOXX</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setHovered(link.to)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  onClick={() => handleNavigation(link.to)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 group ${
                    window.location.pathname === link.to
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white font-semibold"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={16} />}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && hovered === link.to && (
                    <motion.div
                      initial={false} // prevents blink on page refresh
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-black border border-gray-800 rounded-md shadow-lg py-2"
                    >
                      {link.dropdown.map((item) => (
                        <button
                          key={item.to}
                          onClick={() => handleNavigation(item.to)}
                          className={`block w-full text-left px-4 py-2 text-sm transition ${
                            window.location.pathname === item.to
                              ? "bg-blue-500 text-white"
                              : "text-gray-300 hover:text-white hover:bg-gray-800"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/contact")}
              className="ml-4 px-5 py-2 rounded-full bg-blue-500 font-semibold hover:bg-blue-600 transition"
            >
              Get In Touch
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              {links.map((link) => (
                <div key={link.to}>
                  <button
                    onClick={() => handleNavigation(link.to)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition ${
                      window.location.pathname === link.to
                        ? "bg-blue-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </button>

                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                    <div className="ml-4">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.to}
                          onClick={() => handleNavigation(item.to)}
                          className={`block w-full text-left px-3 py-2 text-sm rounded-md transition ${
                            window.location.pathname === item.to
                              ? "bg-blue-500 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation("/contact")}
                className="mt-3 px-4 py-2 rounded-md bg-blue-500 text-white font-medium"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
