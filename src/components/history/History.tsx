import React, { useState } from 'react';
import Header from '../dashboard/Header';
import VHeader from '../dashboard/VHeader';
import { Download } from 'lucide-react'; // Importing the download icon from lucide-react

interface FileHistory {
    name: string;
    type: string;
    compressedAt: string;
    downloadUrl: string;
}

const History: React.FC = () => {
    // Sample data (replace this with real data from your API or state)
    const sampleHistory: FileHistory[] = [
        {
            name: 'image1.jpg',
            type: 'Image',
            compressedAt: '2025-01-22',
            downloadUrl: 'https://example.com/download/image1.jpg',
        },
        {
            name: 'document1.pdf',
            type: 'PDF',
            compressedAt: '2025-01-20',
            downloadUrl: 'https://example.com/download/document1.pdf',
        },
        {
            name: 'image2.png',
            type: 'Image',
            compressedAt: '2025-01-18',
            downloadUrl: 'https://example.com/download/image2.png',
        },
    ];

    const [history] = useState<FileHistory[]>(sampleHistory);
    const [filter, setFilter] = useState<string>('all');

    const filteredHistory = filter === 'all' ? history : history.filter(file => file.type === filter);

    return (
        <div className="">
            <Header />
            <div className="min-h-screen flex flex-col md:flex-row">
                <VHeader />
                <div className="bg-white p-8 md:p-16 mt-4 md:mt-1 w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">History</h1>

                    {/* Filter options */}
                    <div className="mb-8">
                        <button
                            className={`py-2 px-6 mr-4 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`py-2 px-6 mr-4 rounded-md ${filter === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                            onClick={() => setFilter('image')}
                        >
                            Images
                        </button>
                        <button
                            className={`py-2 px-6 rounded-md ${filter === 'pdf' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                            onClick={() => setFilter('pdf')}
                        >
                            PDFs
                        </button>
                    </div>

                    {/* History Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-6 text-left text-gray-800">File Name</th>
                                    <th className="py-3 px-6 text-left text-gray-800">Type</th>
                                    <th className="py-3 px-6 text-left text-gray-800">Compressed At</th>
                                    <th className="py-3 px-6 text-left text-gray-800">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHistory.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="py-6 px-6 text-center text-gray-600">
                                            No history found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredHistory.map((file, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="py-4 px-6 text-gray-700">{file.name}</td>
                                            <td className="py-4 px-6 text-gray-700">{file.type}</td>
                                            <td className="py-4 px-6 text-gray-700">{file.compressedAt}</td>
                                            <td className="py-4 px-6">
                                                <a
                                                    href={file.downloadUrl}
                                                    className="text-blue-600 hover:text-blue-700"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Download className="inline-block text-xl" /> {/* Lucide download icon */}
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
