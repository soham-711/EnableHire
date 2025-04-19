// src/pages/JobMatchChatbot.jsx
import React, { useState, useRef } from 'react';
import { FaMicrophone, FaUpload, FaPaperPlane, FaBriefcase, FaBuilding } from 'react-icons/fa';
import { useReactMediaRecorder } from "react-media-recorder";

const JobMatchChatbot = () => {
  const [textPrompt, setTextPrompt] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [jobSuggestions, setJobSuggestions] = useState([]);
  const suggestionRef = useRef(null);

  const handleResumeUpload = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Simulated job suggestions (replace with API call later)
    const suggestions = [
      { title: "Frontend Developer", company: "TechNova", location: "Remote", type: "Full-Time" },
      { title: "UI/UX Designer", company: "DesignPeak", location: "Hybrid", type: "Contract" },
      { title: "Accessibility Tester", company: "Inclusion Inc", location: "On-site", type: "Part-Time" },
    ];
    setJobSuggestions(suggestions);

    // Scroll into suggestions
    setTimeout(() => {
      if (suggestionRef.current) {
        suggestionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({ audio: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 px-6 py-10 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">💬 Inclusive Job Match Chatbot</h1>

      {/* Upload Resume Section */}
      <div className="bg-white shadow-xl rounded-3xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📄 Upload Your Resume</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="p-2 border rounded w-full sm:w-auto"
            onChange={handleResumeUpload}
          />
          {resumeFile && (
            <p className="text-sm text-green-700 font-medium">Uploaded: {resumeFile.name}</p>
          )}
        </div>
      </div>

      {/* Text and Voice Prompt */}
      <div className="bg-white shadow-xl rounded-3xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📝 Tell us what you're looking for</h2>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-xl resize-none mb-4"
          rows="4"
          placeholder="Type here..."
          value={textPrompt}
          onChange={(e) => setTextPrompt(e.target.value)}
        />

        <div className="flex items-center gap-4">
          <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-xl hover:bg-blue-200 transition"
          >
            <FaMicrophone className="text-blue-600" />
            {status === "recording" ? "Recording..." : "Hold to Speak"}
          </button>
          {mediaBlobUrl && <audio src={mediaBlobUrl} controls className="mt-2" />}
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition ml-auto"
          >
            <FaPaperPlane /> Submit to Chatbot
          </button>
        </div>
      </div>

      {/* Job Suggestions */}
      {jobSuggestions.length > 0 && (
        <div ref={suggestionRef} className="bg-white shadow-2xl rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">🎯 Suggested Jobs for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSuggestions.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-5 hover:shadow-xl transition bg-blue-50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaBriefcase className="text-blue-500 text-xl" />
                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <FaBuilding className="text-gray-500" />
                  {job.company}
                </div>
                <p className="text-sm text-gray-600 mb-1">📍 {job.location}</p>
                <p className="text-sm text-gray-600">💼 {job.type}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobMatchChatbot;
