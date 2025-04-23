import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const userLoginDetails = {
      email:email,
      password:password,
    }
    const response = await axios.post('http://localhost:5000/auth/seeker-login',userLoginDetails);

    if(!response){
     toast.error("Email is not registered")
    }
    toast.success("Login Successfully");
    localStorage.setItem('token',response.data.jwtToken)
    localStorage.setItem('name',response.data.name)
    localStorage.setItem('email',response.data.email);
    setTimeout(()=>{
      navigate('/jobseeker/dashboard')
    },1000)
    console.log(response);
    
   } catch (error) {
    
    
    if(error.response){
      const errMas = error.response.data;
      if(errMas && errMas.error && errMas.error.details){
        toast.error(errMas.error.details[0].message)
      }
      else if(errMas.message){
        toast.error(errMas.message)
      }else{
        toast.error("Login failed")
      }
    }else{
      toast.error("Login failed")
    }
   }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Login to <span className="text-blue-600">EnableHire</span></h2>
          <p className="text-gray-600 text-sm mt-2">Access your account and empower inclusivity!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb- relative">
            <label htmlFor="password" className="block text-lg text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 pr-14 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your password"
            />
            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
