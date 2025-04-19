import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaBriefcase, FaBuilding } from 'react-icons/fa';

const companies = [
  { name: 'TechNova', rating: 4.5, jobsAvailable: 12, location: 'Remote', accessibility: 4 },
  { name: 'DesignPeak', rating: 3.8, jobsAvailable: 5, location: 'Hybrid', accessibility: 3 },
  { name: 'Inclusion Inc', rating: 4.9, jobsAvailable: 8, location: 'On-site', accessibility: 5 },
  { name: 'CloudHub', rating: 4.2, jobsAvailable: 15, location: 'Remote', accessibility: 4 },
  { name: 'DesignWorks', rating: 4.0, jobsAvailable: 3, location: 'On-site', accessibility: 3 },
  { name: 'DataSys', rating: 4.7, jobsAvailable: 7, location: 'Hybrid', accessibility: 4 },
];

const CompanyRatings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-blue-100 to-white px-6 py-12 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Company Ratings</h1>
        <p className="text-xl text-gray-600 mt-4">Discover how inclusive these companies are.</p>
      </div>

      {/* Company List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          >
            <div className="p-6">
              {/* Company Info */}
              <div className="flex items-start gap-4 mb-6">
                <FaBuilding className="text-blue-500 text-4xl mt-1" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">{company.name}</h4>
                  <p className="text-lg text-gray-600">Location: {company.location}</p>
                  <p className="text-sm text-gray-500">Jobs Available: {company.jobsAvailable}</p>
                </div>
              </div>

              {/* Ratings Section */}
              <div className="flex items-center mb-6">
                <FaStar className="text-yellow-500" />
                <p className="ml-2 text-xl text-gray-800 font-semibold">{company.rating} / 5</p>
              </div>

              {/* Accessibility Rating */}
              <div className="flex items-center">
                <p className="text-sm text-gray-600">Accessibility: </p>
                <div className="ml-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-${i < company.accessibility ? 'green' : 'gray'}-400`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Link to View More Info */}
            <div className="p-6 border-t border-gray-200">
              <Link to={`/company/${company.name}`} className="text-blue-600 font-medium hover:underline">
                View More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyRatings;
