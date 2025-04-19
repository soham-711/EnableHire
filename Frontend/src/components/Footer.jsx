// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-600 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">EnableHire</h3>
          <p>Empowering differently-abled individuals with AI-assisted job tools and inclusive opportunities.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-600">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Accessibility */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Accessibility</h4>
          <ul className="space-y-1">
            <li><Link to="/voice-control" className="hover:text-blue-600">Voice Control</Link></li>
            <li><Link to="/sign-chat" className="hover:text-blue-600">Sign Language Chat</Link></li>
            <li><Link to="/screen-reader" className="hover:text-blue-600">Screen Reader Mode</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-200">
        © {new Date().getFullYear()} EnableHire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
