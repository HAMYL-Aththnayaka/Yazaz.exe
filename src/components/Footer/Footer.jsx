import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import logo from '../../assets/Logo.PNG';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
            <div>
              <p className="text-white font-bold text-base">
                Yasas Aththanayaka
              </p>
              <p className="text-xs text-gray-500">
                IT Undergraduate • University of Vavuniya
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <a href="/#works" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="/#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">
              Articles
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="https://github.com/HAMYL-Aththnayaka"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-gray-900 hover:text-white hover:bg-gray-800 transition-all"
              title="GitHub"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/yasas-aththanayaka-a9b9b2333"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-gray-900 hover:text-white hover:bg-gray-800 transition-all"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:aththanayakayasas@gmail.com"
              className="p-2 rounded-lg bg-gray-900 hover:text-white hover:bg-gray-800 transition-all"
              title="Email"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Yasas Aththanayaka. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Built with React 19, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
