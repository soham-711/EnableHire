import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For eye icons
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // To toggle confirm password visibility
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error("Passwords don't match!");
        return;
      }
      const userDetails = {
        name: name,
        email: email,
        password: password,
        conf_password: confirmPassword,
      };

      const response = await axios.post(
        "http://localhost:5000/auth/seeker-signup",
        userDetails
      );
      console.log(response);
      toast.success("Signup successfully");
      setTimeout(() => {
        navigate('/login')
      }, 1000);
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
    
        // If validation error with .details (Joi or similar)
        if (errorData.error && errorData.error.details) {
          toast.error(errorData.error.details[0].message);
        } 
        // If conflict or general error with message
        else if (errorData.message) {
          toast.error(errorData.message);
        } 
        // Fallback
        else {
          toast.error("Something went wrong during signup.");
        }
      } else {
        toast.error("Server not responding.");
      }
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-xl">
        {/* Sign Up Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Sign Up for EnableHire
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Join us to empower inclusivity and start your job search!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-lg text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            {/* Eye Icon for Show/Hide Password */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </span>
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-lg text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            {/* Eye Icon for Show/Hide Confirm Password */}
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
