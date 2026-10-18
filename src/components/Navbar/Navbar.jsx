import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/Logo.PNG';

const navItems = [
  { id: 1, title: "About", link: 'about', isSection: true },
  { id: 2, title: "Services", link: 'services', isSection: true },
  { id: 3, title: "Projects", link: 'works', isSection: true },
  { id: 4, title: "Articles", link: '/blog', isSection: false },
  { id: 5, title: "Contact", link: '/contact', isSection: false },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, link, isSection) => {
    setMobileMenuOpen(false);

    if (isSection) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const element = document.getElementById(link);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/80 transition-all">
      <div className="container mx-auto px-4 max-w-7xl h-18 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src={logo} alt="YaZaZ Logo" className="h-9 w-auto object-contain group-hover:scale-105 transition-transform" />
          <span className="font-bold text-lg text-white tracking-tight hidden sm:inline-block">
            Yazaz<span className="text-blue-500">.exe</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.isSection ? (
                <a
                  href={`#${item.link}`}
                  onClick={(e) => handleNavClick(e, item.link, true)}
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  to={item.link}
                  className={`py-1 transition-colors ${
                    location.pathname === item.link
                      ? "text-blue-400 font-semibold"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href="https://github.com/HAMYL-Aththnayaka"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>

          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/20"
          >
            <FaEnvelope size={13} />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://github.com/HAMYL-Aththnayaka"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-gray-900 text-gray-300 hover:text-white border border-gray-800"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-900 text-gray-300 hover:text-white border border-gray-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.isSection ? (
                  <a
                    href={`#${item.link}`}
                    onClick={(e) => handleNavClick(e, item.link, true)}
                    className="text-gray-300 hover:text-blue-400 text-base font-medium py-2 border-b border-gray-900"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-2 border-b border-gray-900 ${
                      location.pathname === item.link
                        ? "text-blue-400 font-semibold"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
            >
              <FaEnvelope />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;