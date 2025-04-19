import React from 'react';
import { Link } from 'react-router-dom';
import { MdWorkOutline } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';

const JobListings = () => {
  const firstBatchJobs = [
    { title: "Frontend Developer", company: "TechNova", type: "Remote", posted: "2 days ago" },
    { title: "UI/UX Designer", company: "DesignPeak", type: "Hybrid", posted: "1 week ago" },
    { title: "Accessibility Tester", company: "Inclusion Inc", type: "On-site", posted: "3 days ago" },
    { title: "Backend Developer", company: "DataSys", type: "Remote", posted: "1 week ago" },
    { title: "Product Manager", company: "InnoLabs", type: "Hybrid", posted: "5 days ago" },
    { title: "Graphic Designer", company: "DesignWorks", type: "On-site", posted: "2 weeks ago" },
  ];

  const secondBatchJobs = [
    { title: "DevOps Engineer", company: "CloudHub", type: "Remote", posted: "1 day ago" },
    { title: "Data Scientist", company: "QuantumAI", type: "Hybrid", posted: "1 week ago" },
    { title: "Mobile App Developer", company: "AppMasters", type: "On-site", posted: "4 days ago" },
    { title: "Business Analyst", company: "FinData", type: "Remote", posted: "3 days ago" },
    { title: "Java Developer", company: "TechCrafters", type: "Hybrid", posted: "1 week ago" },
    { title: "System Administrator", company: "NetSecure", type: "On-site", posted: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-white px-6 py-12 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">Job Listings</h1>
        <p className="text-xl text-gray-600 mt-4">Explore the latest job opportunities tailored for an inclusive workforce</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-8 mb-8">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">All Jobs</button>
        <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-200">Remote</button>
        <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-200">Hybrid</button>
        <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-200">On-site</button>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {firstBatchJobs.map((job, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <MdWorkOutline className="text-blue-500 text-4xl mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-lg text-gray-600">{job.company}</p>
                </div>
              </div>

              {/* Job Type Badge */}
              <div className={`inline-block py-1 px-4 text-sm rounded-full ${
                job.type === "Remote" ? "bg-blue-100 text-blue-700" :
                job.type === "Hybrid" ? "bg-yellow-100 text-yellow-700" :
                "bg-green-100 text-green-700" 
              }`}>
                {job.type}
              </div>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  {job.posted}
                </span>
                <Link to="/job-details" className="text-blue-600 font-medium hover:underline">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Jobs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {secondBatchJobs.map((job, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <MdWorkOutline className="text-blue-500 text-4xl mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-lg text-gray-600">{job.company}</p>
                </div>
              </div>

              {/* Job Type Badge */}
              <div className={`inline-block py-1 px-4 text-sm rounded-full ${
                job.type === "Remote" ? "bg-blue-100 text-blue-700" :
                job.type === "Hybrid" ? "bg-yellow-100 text-yellow-700" :
                "bg-green-100 text-green-700" 
              }`}>
                {job.type}
              </div>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  {job.posted}
                </span>
                <Link to="/job-details" className="text-blue-600 font-medium hover:underline">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Jobs Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Load More Jobs
        </button>
      </div>
    </div>
  );
};

export default JobListings;
