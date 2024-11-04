import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Dumbbell className="h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-bold text-gray-900">Sweat Smart</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/features', label: 'Features' },
              { path: '/pricing', label: 'Pricing' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'text-purple-600 after:w-full' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/download"
              className="btn-primary"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/features', label: 'Features' },
            { path: '/pricing', label: 'Pricing' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }, index) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300 ${
                location.pathname === path ? 'text-purple-600 bg-purple-50' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/download"
            className="block px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Download App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;