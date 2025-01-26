import React, { useState, useEffect } from 'react';
import Header from '../dashboard/Header';
import VHeader from '../dashboard/VHeader';
import { Download } from 'lucide-react'; // Importing the download icon from lucide-react
import { getAllLinks } from '../../api/api'; // Import your getAllLinks function

interface FileHistory {
  imageUrl: string; // Image URL from the API response
  compressedAt: string; // Compressed date from the API response
}

const History: React.FC = () => {
  const [history, setHistory] = useState<FileHistory[]>([]); // Set state for file history
  const [filter, setFilter] = useState<string>('all'); // Set filter state

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getAllLinks(); // Fetch file history from the API
        if (response?.success) {
          // Map the response to the expected data structure
          const images = response.data.map((file: { url: string; compressedAt: string }) => ({
            imageUrl: file.url, // Extract the image URL
            compressedAt: file.compressedAt, // Extract the compression date
          }));
          setHistory(images); // Set the fetched history in state
        }
      } catch (error) {
        console.error('Failed to fetch history:', error); // Handle fetch error
      }
    };

    fetchHistory(); // Call the fetch function on component mount
  }, []); // Empty dependency array means this runs once on component mount

  // Filter logic (not really needed for this use case, but could be expanded)
  const filteredHistory = filter === 'all' ? history : history.filter((file) => file.imageUrl);

  // Download handler function
  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'image.jpg'; // Set the filename for download
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col min-h-screen md:flex-row">
        <VHeader />
        <div className="bg-white p-8 md:p-16 mt-4 md:mt-1 w-full rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">History</h1>

          {/* Filter options */}
          <div className="mb-6">
            <button
              className={`py-2 px-6 mr-4 rounded-lg text-sm font-medium ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
          </div>

          {/* History Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-100 text-left">
                <tr>
                  <th className="py-3 px-6 text-gray-700 font-medium">Image</th>
                  <th className="py-3 px-6 text-gray-700 font-medium">Compressed At</th>
                  <th className="py-3 px-6 text-gray-700 font-medium">Download</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-6 px-6 text-center text-gray-600">
                      No images found.
                    </td>
                  </tr>
                ) : (
                  filteredHistory.map((file, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4 px-6">
                        <img
                          src={file.imageUrl}
                          alt={`Image ${index + 1}`}
                          className="w-20 h-20 object-cover rounded-md shadow-sm"
                        />
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        {new Date(file.compressedAt).toLocaleDateString()} {/* Display the compression date */}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleDownload(file.imageUrl)} // Trigger download on button click
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Download className="inline-block text-xl" /> {/* Lucide download icon */}
                        </button>
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
