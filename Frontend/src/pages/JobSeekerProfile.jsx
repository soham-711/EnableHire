import React, { useState } from 'react';
import { FaUserEdit, FaBriefcase, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const JobSeekerProfile = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: name,
    email: email,
    phone: '+91 9876543210',
    location: 'Kolkata, India',
    profession: 'Full Stack Developer',
    about: 'Passionate about building inclusive digital solutions that create real-world impact.',
    skills: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'AI/ML'],
    experience: '3+ years in software development with a focus on accessibility and user-centered design.',
    education: 'B.Tech in Computer Science and Engineering from XYZ University',
    achievements: ['Winner - National Hackathon 2024', 'Built an AI-powered fire safety tool', 'Top-rated freelancer on Fiverr']
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState(userData);
  

  const handleEditToggle = () => {
    if (isEditing) {
      setUserData(editableData);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleLogout = ()=>{
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    console.log("User logged out");
    
    setTimeout(() => {
        navigate('/login');
    }, 1000);
   
  }
  function getInitials(name) {
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0][0].toUpperCase();
    }
    return nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase();
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="flex justify-between mb-6">
          <button onClick={handleEditToggle} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl font-semibold">
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold flex items-center gap-2" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-3xl font-bold">
          {getInitials(editableData.name)}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              {editableData.name}
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              <FaBriefcase className="text-purple-500" /> {editableData.profession}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaEnvelope className="text-green-500" /> {editableData.email}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaPhoneAlt className="text-red-400" /> {editableData.phone}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-600" /> {editableData.location}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">About Me</h2>
          {isEditing ? (
            <textarea
              name="about"
              value={editableData.about}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-xl">{editableData.about}</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {editableData.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Experience</h2>
          {isEditing ? (
            <textarea
              name="experience"
              value={editableData.experience}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-700 bg-gray-100 p-4 rounded-xl">{editableData.experience}</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Education</h2>
          {isEditing ? (
            <textarea
              name="education"
              value={editableData.education}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-700 bg-gray-100 p-4 rounded-xl">{editableData.education}</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-100 p-4 rounded-xl">
            {editableData.achievements.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default JobSeekerProfile;
