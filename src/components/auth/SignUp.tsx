import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center py-16 px-10">
                <div className="max-w-lg bg-blue-800 bg-opacity-30 p-8 rounded-3xl shadow-xl">
                    <h1 className="text-4xl font-extrabold mb-6 leading-tight text-center">
                        Why Join <span className="text-blue-300">OptiShrink?</span>
                    </h1>
                    <ul className="space-y-6">
                        <li className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-300 text-blue-900 font-bold rounded-full">
                                1
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Advanced File Compression
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    Compress files without compromising quality, saving time and storage.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-300 text-blue-900 font-bold rounded-full">
                                2
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Secure and Private
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    Industry-grade encryption ensures your files remain safe and private.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-300 text-blue-900 font-bold rounded-full">
                                3
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Effortless File Sharing
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    Share compressed files quickly and easily with anyone, anywhere.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-300 text-blue-900 font-bold rounded-full">
                                4
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    User-Friendly Design
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    Our platform is intuitive and easy to navigate, designed for all users.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Section (Form) */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-16 px-8">
                <div className="w-full max-w-md">
                    <form>
                        {/* Header */}
                        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
                            Create Your Account
                        </h2>

                        {/* Name Field */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>

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
                                placeholder="Create a password"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 px-4 text-lg font-bold rounded-md hover:bg-blue-800 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 font-medium">
                            Already have an account?{' '}
                            <Link to="/signin" className="text-blue-600 hover:underline font-bold">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
