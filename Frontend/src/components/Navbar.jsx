// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Enable<span className="text-gray-800">Hire</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
          <Link to="/jobs" className="hover:text-blue-600 transition">Jobs</Link>
          <Link to="/resume-optimizer" className="hover:text-blue-600 transition">Resume Optimizer</Link>
          <Link to="/chatbot" className="hover:text-blue-600 transition">AI Assistant</Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FaBell className="text-xl text-gray-600 hover:text-blue-600 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
          </button>
          <Link to="/profile">
            <FaUserCircle className="text-2xl text-gray-600 hover:text-blue-600 transition" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
