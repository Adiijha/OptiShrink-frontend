import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const File: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [pdfPreview, setPdfPreview] = useState<string | null>(null);
    const [compressionLevel, setCompressionLevel] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCompressClick = () => {
        if (!selectedFile || !compressionLevel) return;

        setIsProcessing(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setIsProcessing(false);
                    setShowPopup(true);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 500);
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setCompressionLevel(null);

            const fileReader = new FileReader();
            fileReader.onload = async (e) => {
                const arrayBuffer = e.target?.result as ArrayBuffer;
                if (arrayBuffer) {
                    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                    const page = await pdf.getPage(1);
                    const viewport = page.getViewport({ scale: 1 });

                    // Create a canvas to render the PDF page
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    if (context) {
                        canvas.width = viewport.width;
                        canvas.height = viewport.height;

                        const renderContext = {
                            canvasContext: context,
                            viewport,
                        };
                        await page.render(renderContext).promise;

                        // Convert canvas to image
                        const dataUrl = canvas.toDataURL();
                        setPdfPreview(dataUrl);
                    }
                }
            };
            fileReader.readAsArrayBuffer(file);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleDownloadClick = () => {
        navigate('/download');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
            <div className={`w-full bg-white rounded-lg shadow-lg p-8 ${selectedFile ? 'max-w-7xl' : 'max-w-2xl'}`}>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Optimize Your PDFs</h1>
                <p className="text-gray-600 mb-8 text-center">
                    Reduce PDF size while retaining quality. Perfect for web, emails, and more.
                </p>

                <div className={`grid grid-cols-1 gap-8 ${selectedFile ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                    {/* File Upload Section */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 hover:border-blue-500 transition">
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept=".pdf"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="file-upload"
                            className="block text-gray-600 text-lg font-medium cursor-pointer hover:text-blue-500 text-center"
                        >
                            {pdfPreview ? (
                                <img src={pdfPreview} alt="PDF Preview" className="w-full h-auto rounded-lg" />
                            ) : selectedFile ? (
                                <p className="text-gray-800 font-semibold">{selectedFile.name}</p>
                            ) : (
                                <>
                                    Drag and drop your PDFs here or{' '}
                                    <span className="text-blue-600 font-semibold">browse</span>
                                </>
                            )}
                        </label>
                    </div>

                    {/* Compression Level and Action Section */}
                    <div>
                        {selectedFile && (
                            <>
                                <p className="text-gray-600 text-xl font-medium mb-4">Choose Compression Level:</p>
                                <div className="flex flex-col space-y-4 mb-6">
                                    {[
                                        {
                                            level: 'low',
                                            title: 'Low Compression',
                                            description:
                                                'High quality, minimal compression. Suitable for professional use.',
                                        },
                                        {
                                            level: 'mid',
                                            title: 'Medium Compression',
                                            description:
                                                'Balanced quality and file size. Recommended for general-purpose use.',
                                        },
                                        {
                                            level: 'high',
                                            title: 'High Compression',
                                            description:
                                                'Lower quality, maximum compression. Best for web and email.',
                                        },
                                    ].map((option) => (
                                        <div
                                            key={option.level}
                                            className={`p-4 rounded-lg border transition cursor-pointer ${
                                                compressionLevel === option.level
                                                    ? 'border-blue-600 bg-blue-50'
                                                    : 'border-gray-300 hover:border-blue-500'
                                            }`}
                                            onClick={() => setCompressionLevel(option.level)}
                                        >
                                            <h3
                                                className={`text-lg font-semibold ${
                                                    compressionLevel === option.level
                                                        ? 'text-blue-600'
                                                        : 'text-gray-800'
                                                }`}
                                            >
                                                {option.title}
                                            </h3>
                                            <p className="text-gray-600">{option.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className={`py-3 px-6 rounded-lg font-semibold transition ${
                                        isProcessing || !compressionLevel
                                            ? 'bg-gray-400 text-gray-800 cursor-not-allowed hidden'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                                    onClick={handleCompressClick}
                                    disabled={isProcessing || !compressionLevel}
                                >
                                    {isProcessing ? 'Optimizing...' : 'Optimize Now'}
                                </button>

                                {isProcessing && (
                                    <div className="mt-6">
                                        <div className="w-full bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                        <p className="mt-2 text-gray-600">{progress}% Complete</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Optimization Complete!</h2>
                            <p className="text-gray-600 mb-6">Your PDF is ready to download.</p>
                            <button
                                onClick={handleDownloadClick}
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Download
                            </button>
                            <button
                                className="border-2 border-blue-600 text-blue-500 ml-3 py-1.5 px-4 rounded-lg font-semibold hover:bg-gray-100 transition"
                                onClick={closePopup}
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

export default File;
