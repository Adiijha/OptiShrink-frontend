import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../api/api"; // Replace with the correct import path for your loginUser API
import Cookies from "js-cookie";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { login } from "../../redux/authSlice"; // Adjust to your actual Redux slice action path
import { Link } from 'react-router-dom';

interface RootState {
    auth: {
      isAuthenticated: boolean;
    };
  }
  


const SignIn: React.FC = () => {
      // Component state
  const [emailOrUsername, setEmailOrUsername] = useState<string>(""); // State for email or username
  const [password, setPassword] = useState<string>(""); // State for password
  const [showPassword, setShowPassword] = useState<boolean>(false); // State for toggling password visibility
  const [error, setError] = useState<string | null>(null); // State for errors
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the authentication state from Redux
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Handle sign-in form submission
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
  
    try {
      const response = await loginUser(emailOrUsername, password); // Ensure this returns the correct structure
      console.log("Login Response:", response);
  
      const accessToken = response?.data?.accessToken; // Adjust based on actual API response structure
      if (!accessToken) {
        console.error("Access Token missing in response:", response);
        throw new Error("Access Token not found");
      }
  
      // Store the token in cookies
      Cookies.set("accessToken", accessToken, { secure: true, sameSite: "lax" });
  
      // Dispatch login action to Redux
      dispatch(login(accessToken));
      localStorage.setItem("authToken", accessToken);
      console.log("Token stored successfully:", accessToken);
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center py-16 px-10">
                <div className="max-w-lg bg-blue-800 bg-opacity-30 p-8 rounded-3xl shadow-xl">
                    <h1 className="text-4xl font-extrabold mb-6 leading-tight text-center">
                        Welcome Back to <span className="text-blue-300">OptiShrink</span>
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-200">
                        Access your compressed files and manage them seamlessly with our powerful, secure, and easy-to-use platform.
                    </p>
                </div>
            </div>

            {/* Right Section (Form) */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-16 px-8">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSignIn}>
                        {/* Header */}
                        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
                            Sign In to Your Account
                        </h2>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email or Username
                            </label>
                            <input
                                type="text"
                                id="emailOrUsername"
                                name="emailOrUsername"
                                value={emailOrUsername}
                                onChange={(e) => setEmailOrUsername(e.target.value)}
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your email or Username"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your password"
                            />
                            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-700 text-white py-3 px-4 text-lg font-bold rounded-md hover:bg-blue-800 transition duration-300"
                        >
                            {isLoading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-center mt-2 text-sm">{error}</p>}

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 font-medium">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-600 hover:underline font-bold">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
