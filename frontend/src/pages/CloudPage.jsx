import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the back arrow icon
import { useNavigate } from 'react-router-dom'; // For navigation
import CloudTable from '../components/CloudTable';

const CloudPage = () => {
  const navigate = useNavigate(); // Initialize navigate for back navigation

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex items-center justify-center py-8"> {/* Reduced padding */}
      {/* Back button in the top left */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBack}
        className="absolute top-4 left-4 p-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
        rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto p-9 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
      >
        {/* Reduced max width and padding */}
        <div className="text-center mb-8"> {/* Reduced margin */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-2"> {/* Reduced font size */}
            Leading Cloud Infrastructure Providers
          </h1>
          <p className="text-lg text-gray-300"> {/* Reduced font size */}
            A snapshot of the worldwide market share of cloud providers as of Q1 2024.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center"
        >
          <CloudTable />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CloudPage;
