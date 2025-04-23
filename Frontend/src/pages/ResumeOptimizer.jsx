import React, { useState } from 'react';
import { FaFileUpload, FaDownload } from 'react-icons/fa';
import { MdEditNote } from 'react-icons/md';

const ResumeOptimizer = () => {
  const [resume, setResume] = useState(null);
  const [jobRole, setJobRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [atsScore, setAtsScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [optimizedResumeUrl, setOptimizedResumeUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

  const handleOptimize = async () => {
    if (!resume || !jobRole) {
      alert('Please upload a resume and enter a job role.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobRole', jobRole);

    try {
      const response = await fetch('/api/resume/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      setAtsScore(data.atsScore);
      setSuggestions(data.suggestions);
      setOptimizedResumeUrl(data.optimizedResumeUrl);
    } catch (error) {
      alert('Error analyzing resume. Try again.');
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 to-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          ✨ Resume Optimizer
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Upload your resume, and let AI enhance it for your dream job!
        </p>

        {/* Upload + Role Input */}
        <div className="grid md:grid-cols-2 gap-6">
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

          <div className="flex flex-col justify-center">
            <label className="text-gray-700 font-medium mb-2">Target Job Role</label>
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button
              onClick={handleOptimize}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md transition"
            >
              <MdEditNote className="inline text-xl mr-2" />
              {loading ? 'Processing...' : 'Analyze & Enhance'}
            </button>
          </div>
        </div>

        {/* Results */}
        {atsScore !== null && (
          <div className="mt-10">
            <div className="bg-white border border-green-200 rounded-2xl p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">✅ ATS Score</h2>
              <p className="text-5xl font-bold text-green-600">{atsScore}/100</p>
            </div>

            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-6">
              <h2 className="text-xl font-bold text-blue-700 mb-2">📥 Download Enhanced Resume</h2>
              <a
                href={optimizedResumeUrl}
                download="Optimized_Resume.pdf"
                className="inline-flex items-center mt-2 text-blue-600 font-medium hover:underline"
              >
                <FaDownload className="mr-2" />
                Download PDF
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">💡 AI Suggestions</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                {suggestions.map((sugg, index) => (
                  <li key={index}>{sugg}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeOptimizer;
