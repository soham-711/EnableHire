import React from 'react'
import { Navigate } from 'react-router-dom'

function UserProtected({ children }) {
  const isAuthenticated = localStorage.getItem('token') !== null; // or use context/auth state

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default UserProtected;
