import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Image: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleCompressClick = () => {
        setIsProcessing(true);
        setProgress(0);
    };

    useEffect(() => {
        if (isProcessing) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(timer);
                        setIsProcessing(false);
                        setShowPopup(true); 
                        return 100;
                    }
                    return prevProgress + 10;
                });
            }, 500);
            return () => clearInterval(timer);
        }
    }, [isProcessing]);

    const handleDownloadClick = () => {
        navigate('/download'); 
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50  to-blue-100">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Optimize Your Images</h1>
                <p className="text-gray-600 mb-8">
                    Reduce image size while retaining quality. Perfect for web, social media, and more. Start optimizing now!
                </p>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 hover:border-blue-500 transition">
                    <input
                        type="file"
                        id="image-upload"
                        className="hidden"
                        accept="image/*"
                        multiple
                    />
                    <label
                        htmlFor="image-upload"
                        className="block text-gray-600 text-lg font-medium cursor-pointer hover:text-blue-500"
                    >
                        Drag and drop your images here or{' '}
                        <span className="text-blue-600 font-semibold">browse</span>
                    </label>
                </div>
                {/* Progress Bar */}
                {isProcessing && (
                    <div className="mt-6 w-full">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="mt-2 text-gray-600">{progress}% Complete</p>
                    </div>
                )}

                <button
                    className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
                    onClick={handleCompressClick}
                    disabled={isProcessing}
                >
                    {isProcessing ? 'Optimizing...' : 'Optimizing Now'}
                </button>

                {/* Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Optmization Complete!</h2>
                            <p className="text-gray-600 mb-6">Your image are ready to download.</p>
                            <button
                                onClick={handleDownloadClick}
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Download
                            </button>
                            <button
                                onClick={closePopup}
                                className="mt-4 ml-10 text-gray-500 hover:text-gray-800 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Image;
