import React from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
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
                    <form>
                        {/* Header */}
                        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
                            Sign In to Your Account
                        </h2>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 px-4 text-lg font-bold rounded-md hover:bg-blue-800 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>

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
