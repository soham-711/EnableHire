// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
// import RecruiterDashboard from './pages/RecruiterDashboard';
 import JobMatchChatbot from './pages/JobMatchChatbot';
 import ResumeOptimizer from './pages/ResumeOptimizer';
import SignLanguageChat from './pages/SignLanguageChat';
 import JobListings from './pages/JobListings';
 import CompanyRatings from './pages/CompanyRatings';
// import PostJob from './pages/PostJob';
// import AccessibilityAudit from './pages/AccessibilityAudit';
// import BadgeGenerator from './pages/BadgeGenerator';
// import ApplicantTracker from './pages/ApplicantTracker';
// import ProfileSettings from './pages/ProfileSettings';
// import Notifications from './pages/Notifications';
// import HelpSupport from './pages/HelpSupport';

// Optional: import layout components (Navbar, Footer) if you have them
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/company-ratings" element={<CompanyRatings />} />
        <Route path="/job-chatbot" element={<JobMatchChatbot />} />
        <Route path="/resume-optimizer" element={<ResumeOptimizer />} />
        <Route path="/sign-chat" element={<SignLanguageChat />} />
       {/*} <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        
        
        
       
       
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/accessibility-audit" element={<AccessibilityAudit />} />
        <Route path="/badge-generator" element={<BadgeGenerator />} />
        <Route path="/applicant-tracker" element={<ApplicantTracker />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help-support" element={<HelpSupport />} />  */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
