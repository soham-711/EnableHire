// src/pages/ResumeOptimizer.jsx
import React, { useState } from 'react';
import { FaFileUpload, FaDownload, FaCheckCircle } from 'react-icons/fa';
import { MdEditNote } from 'react-icons/md';

const ResumeOptimizer = () => {
  const [resume, setResume] = useState(null);
  const [jobRole, setJobRole] = useState('');
  const [optimized, setOptimized] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

  const handleOptimize = () => {
    if (resume && jobRole) {
      // Call AI backend here
      setOptimized(true);
    } else {
      alert("Please upload a resume and enter a job role.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-50 via-white to-blue-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
        
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
          ✨ Resume Optimizer
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Upload your resume and get personalized improvements for your desired job.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Resume Upload Section */}
          <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-blue-50 hover:bg-blue-100 transition">
            <FaFileUpload className="text-blue-500 text-4xl mb-4" />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="resumeUpload"
              onChange={handleFileChange}
            />
            <label htmlFor="resumeUpload" className="cursor-pointer text-blue-600 font-medium hover:underline">
              {resume ? resume.name : 'Click to upload your resume'}
            </label>
            <p className="text-xs text-gray-500 mt-2">Accepted: .pdf, .doc, .docx</p>
          </div>

          {/* Job Role & Optimize Button */}
          <div className="flex flex-col justify-between">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Enter your Target Job Role
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. Frontend Developer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />

              <button
                onClick={handleOptimize}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
              >
                <MdEditNote className="inline mr-2 text-xl" />
                Optimize My Resume
              </button>
            </div>

            {optimized && (
              <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-xl text-green-800 shadow-sm">
                <FaCheckCircle className="inline mr-2 text-lg" />
                Optimization complete! Download your enhanced resume.
                <br />
                <button className="mt-3 inline-flex items-center text-blue-600 font-medium hover:underline">
                  <FaDownload className="mr-2" />
                  Download Optimized Resume
                </button>
              </div>
            )}
          </div>
        </div>

        {/* AI Suggestions */}
        {optimized && (
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">💡 AI Suggestions</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Use more action verbs in work experience.</li>
              <li>Include key technologies like React, Redux, and TypeScript.</li>
              <li>Align resume summary with the job role.</li>
              <li>Remove outdated tools like jQuery from skillset.</li>
              <li>Highlight achievements with measurable impact.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeOptimizer;
