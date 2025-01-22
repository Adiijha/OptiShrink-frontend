import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-md top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20">
                {/* Logo */}
                <Link to="/">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 text-transparent bg-clip-text">
                    OptiShrink
                </h1>
                </Link>
                {/* Navigation */}
                <nav>
                    <ul className="hidden md:flex space-x-8 text-gray-700 text-md font-medium">
                    <li>
                            <Link
                                to="/optimizeimage"
                                className="hover:text-blue-500 transition duration-300"
                            >
                                Image Optimizer
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/compressfile"
                                className="hover:text-blue-500 transition duration-300"
                            >
                                File Compressor
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#pricing"
                                className="hover:text-blue-500 transition duration-300"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-blue-500 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Call to Action (Login & Sign Up) */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/signin"
                        className="px-6 py-2 text-gray-700 border bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="block md:hidden text-gray-600 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
