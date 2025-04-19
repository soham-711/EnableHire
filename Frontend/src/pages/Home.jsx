import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar/>
      {/* Hero Section */}
      <header className="text-center py-20 px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Welcome to <span className="text-blue-600">EnableHire</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Empowering differently-abled individuals to find inclusive jobs with AI-powered assistance.
        </p>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12 tracking-tight">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              title: 'Voice Navigation',
              description: 'Navigate the platform using voice commands for better accessibility.',
              emoji: '🎙️',
            },
            {
              title: 'Sign Language Chat',
              description: 'Chat with recruiters using sign-to-text integration.',
              emoji: '🤟',
            },
            {
              title: 'AI Resume Optimizer',
              description: 'Make your resume inclusive, impactful, and job-ready.',
              emoji: '📄',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-2xl p-8 text-center shadow-lg transform transition-all hover:shadow-xl hover:scale-105 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-700">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <Footer/>
    </div>
  );
};

export default Home;
