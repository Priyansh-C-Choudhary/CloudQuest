import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

const RoadmapPage = () => {
  const { tool } = useParams(); // Extract the tool name from the URL
  const navigate = useNavigate(); // For navigation
  const [roadmap, setRoadmap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch roadmap content for the selected tool
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/roadmap/${tool}`);
        setRoadmap(response.data.roadmap);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load roadmap content.");
        setIsLoading(false);
      }
    };

    fetchRoadmap();
  }, [tool]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin text-green-500" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        {tool.charAt(0).toUpperCase() + tool.slice(1)} Roadmap
      </h1>
      <div className="text-white">
        {roadmap ? roadmap.content : "No content available for this tool."}
      </div>
    </motion.div>
  );
};

export default RoadmapPage;
