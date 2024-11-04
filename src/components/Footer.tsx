import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Dumbbell className="h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-bold">Sweat Smart</span>
            </Link>
            <p className="text-gray-400">
              Empowering women through fitness, community, and wellness.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/features', label: 'Features' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/blog', label: 'Blog' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { to: '/contact', label: 'Contact Us' },
                { to: '/faq', label: 'FAQ' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="block px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-center"
              >
                Google Play
              </a>
              <p className="text-gray-400">
                iOS version coming soon!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sweat Smart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;