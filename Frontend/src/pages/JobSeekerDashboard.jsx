import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit, FaRobot, FaSignLanguage } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JobSeekerDashboard = () => {
  const userName = "Soham"; // Replace with dynamic user name in real app

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-blue-50 to-white px-6 py-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">👋 Welcome, <span className="text-blue-700">{userName}</span></h1>
            <p className="text-gray-600 text-base mt-2">Your inclusive career journey starts here.</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link to="/resume-optimizer" className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <FaUserEdit className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Resume Optimizer</h2>
                <p className="text-sm text-gray-600">Boost your CV with AI</p>
              </div>
            </div>
          </Link>

          <Link to="/job-chatbot" className="bg-gradient-to-r from-purple-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <FaRobot className="text-purple-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Job Match Chatbot</h2>
                <p className="text-sm text-gray-600">Find jobs through smart chat</p>
              </div>
            </div>
          </Link>

          <Link to="/sign-chat" className="bg-gradient-to-r from-green-100 to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <FaSignLanguage className="text-green-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Sign Language Chat</h2>
                <p className="text-sm text-gray-600">Inclusive communication</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Job Listings */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">🧑‍💼 Recent Job Listings</h3>
            <Link to="/jobs" className="text-blue-700 text-sm font-medium hover:underline">View all</Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {[
              { title: "Frontend Developer", company: "TechNova", type: "Remote" },
              { title: "UI/UX Designer", company: "DesignPeak", type: "Hybrid" },
              { title: "Accessibility Tester", company: "Inclusion Inc", type: "On-site" },
            ].map((job, idx) => (
              <li key={idx} className="py-4 flex items-start gap-4 hover:bg-blue-50 px-4 rounded-xl transition">
                <MdWorkOutline className="text-blue-500 text-2xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.company} • {job.type}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobSeekerDashboard;
