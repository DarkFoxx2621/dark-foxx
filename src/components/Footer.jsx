// Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-gray-300 overflow-hidden">
      {/* Background layer with orbs & stars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* dark gradient layer (z-index 0) */}
        <div className="bg-layer absolute inset-0" />

        {/* animated orbs (z-index 1) */}
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />

        {/* subtle stars (z-index 1) */}
        <svg className="stars absolute inset-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
          <g fill="white" opacity="0.06">
            <circle cx="60" cy="30" r="1.2" />
            <circle cx="140" cy="50" r="1.1" />
            <circle cx="220" cy="20" r="0.9" />
            <circle cx="320" cy="60" r="1" />
            <circle cx="420" cy="40" r="1.3" />
            <circle cx="520" cy="30" r="0.8" />
            <circle cx="660" cy="50" r="1" />
            <circle cx="780" cy="10" r="1.1" />
            <circle cx="860" cy="45" r="0.9" />
            <circle cx="980" cy="30" r="1" />
            <circle cx="1120" cy="55" r="1.1" />
          </g>
        </svg>
      </div>

      {/* Content (above background) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="text-gray-500">DARKFOXX</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm">
            Empowering businesses with Websites, Apps, AI/ML, and Digital Marketing
            solutions — crafted in a modern dark style.
          </p>

          <div className="flex items-center space-x-3 mt-6">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-pink-700 transition text-gray-300">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-900 transition text-gray-300">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-cyan-800 transition text-gray-300">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-700 transition text-gray-300">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Main Menu */}
        <div>
          <h3 className="text-lg font-semibold text-white">Main Menu</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {["About Us", "Services", "Portfolio", "Digital Marketing", "Contact", "Career"].map((t) => (
              <li key={t}>
                <a className="hover:text-blue-400 transition" href="#">{t}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {["Terms & Conditions", "Privacy Policy", "Refund & Cancellation"].map((t) => (
              <li key={t}>
                <a className="hover:text-blue-400 transition" href="#">{t}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-0.5 text-yellow-400" />
              <span>Offira Business Hub, VIP Road, Vesu, Surat, India</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaPhone className="mt-0.5 text-yellow-400" />
              <span>+91 6353723521</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope className="mt-0.5 text-yellow-400" />
              <span>pratik@infinite.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-gray-800 pt-6 pb-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} <span className="text-gray-500">DARKFOXX</span> • Built with <span className="text-pink-400">♥</span> by <span className="text-blue-400"><span className="text-gray-500">DARKFOXX</span></span></p>
      </div>

      {/* Component-scoped styles (orbs, stars, animations) */}
      <style>{`
        /* gradient background (under the orbs) */
        .bg-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(5,5,5,0.95) 0%, rgba(10,16,28,0.7) 45%, rgba(5,5,5,0.95) 100%);
          z-index: 0;
        }

        /* orb base */
        .orb {
          position: absolute;
          border-radius: 50%;
          transform: translate3d(0,0,0);
          will-change: transform, opacity;
          pointer-events: none;
          z-index: 1;
          filter: blur(72px);
        }

        /* purple orb (upper-left) */
        .orb--1 {
          width: 420px;
          height: 420px;
          left: -140px;
          top: -90px;
          background: radial-gradient(circle at 25% 25%, rgba(124,58,237,0.95), rgba(124,58,237,0.45) 40%, transparent 68%);
          opacity: 0.42;
          animation: float1 20s ease-in-out infinite;
        }

        /* blue orb (upper-right) */
        .orb--2 {
          width: 360px;
          height: 360px;
          right: -120px;
          top: 40px;
          background: radial-gradient(circle at 30% 30%, rgba(10,132,255,0.9), rgba(10,132,255,0.35) 45%, transparent 70%);
          opacity: 0.36;
          animation: float2 24s ease-in-out infinite;
        }

        /* red/pink orb (bottom-right) */
        .orb--3 {
          width: 500px;
          height: 500px;
          right: -160px;
          bottom: -140px;
          background: radial-gradient(circle at 30% 30%, rgba(225,29,72,0.92), rgba(225,29,72,0.30) 38%, transparent 68%);
          opacity: 0.28;
          filter: blur(96px);
          animation: float3 26s ease-in-out infinite;
        }

        @keyframes float1 {
          0%   { transform: translate3d(0,0,0) scale(1) }
          25%  { transform: translate3d(80px,-40px,0) scale(1.02) }
          50%  { transform: translate3d(-60px,60px,0) scale(0.98) }
          75%  { transform: translate3d(40px,-20px,0) scale(1.01) }
          100% { transform: translate3d(0,0,0) scale(1) }
        }
        @keyframes float2 {
          0%   { transform: translate3d(0,0,0) scale(1) }
          30%  { transform: translate3d(-90px,40px,0) scale(1.03) }
          60%  { transform: translate3d(90px,-60px,0) scale(0.97) }
          100% { transform: translate3d(0,0,0) scale(1) }
        }
        @keyframes float3 {
          0%   { transform: translate3d(0,0,0) scale(1) }
          20%  { transform: translate3d(120px,-60px,0) scale(1.04) }
          50%  { transform: translate3d(-100px,90px,0) scale(0.96) }
          80%  { transform: translate3d(60px,-30px,0) scale(1.01) }
          100% { transform: translate3d(0,0,0) scale(1) }
        }

        /* twinkling stars */
        .stars g circle { transform-origin: center; animation: twinkle 6s linear infinite; }
        .stars g circle:nth-child(2n) { animation-duration: 7.5s; }
        .stars g circle:nth-child(3n) { animation-duration: 8.5s; }
        @keyframes twinkle {
          0% { opacity: 0.06; transform: scale(1) }
          50% { opacity: 0.14; transform: scale(1.08) }
          100% { opacity: 0.06; transform: scale(1) }
        }

        /* reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .orb, .stars g circle { animation: none !important; transform: none !important; }
        }

        /* responsive tweaks */
        @media (max-width: 768px) {
          .orb--1 { width: 300px; height: 300px; left: -80px; top: -80px; filter: blur(56px); }
          .orb--2 { width: 240px; height: 240px; right: -60px; top: 30px; filter: blur(48px); }
          .orb--3 { width: 360px; height: 360px; right: -100px; bottom: -100px; filter: blur(72px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
