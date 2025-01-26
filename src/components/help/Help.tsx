import React from 'react';
import Header from '../dashboard/Header';
import VHeader from '../dashboard/VHeader';

const Help: React.FC = () => {
    return (
        <div className="">
        <Header />
        <div className="flex flex-row min-h-screen">
            <VHeader />
            <div className=" w-full bg-gray-50 p-16 mt-1">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Help & Support</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Need assistance? We’re here to help! Find answers to common questions or contact support for further assistance.
                </p>

                <div className="text-gray-700">
                    <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <ul className="space-y-6">
                        <li>
                            <h3 className="font-semibold text-2xl">How do I upload my files?</h3>
                            <p className="text-gray-600 text-lg">Simply click the "Browse" button or drag and drop your image or PDF into the upload area.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-2xl">What file formats are supported?</h3>
                            <p className="text-gray-600 text-lg">We currently support JPG, PNG, and PDF formats for compression.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-2xl">How long does it take to compress a file?</h3>
                            <p className="text-gray-600 text-lg">Compression time depends on the file size. Larger files may take a few seconds to process.</p>
                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Still Need Help?</h2>
                    <p className="mb-6 text-xl">If you need more help, feel free to contact our support team by clicking the button below:</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                        Contact Support
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Help;
