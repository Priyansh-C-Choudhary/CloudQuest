import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importing navigate for back functionality
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Importing back arrow icon
import data from "../data/DevOpsTableData.json";

const devopsColorMap = {
    "Source Control Management": "#812E58",
    "Database Automation": "#F16932",
    "Continuous Integration": "#4DA9D4",
    "Testing": "#A74233",
    "Configuration": "#1F4D7D",
    "Deployment": "#54B288",
    "Containers": "#434B4E",
    "Release Orchestration": "#499FC9",
    "Cloud": "#FCC137",
    "AIOps": "#CB6D31",
    "Analytics": "#4D8C7B",
    "Monitoring": "#444E55",
    "Security": "#1A87A9",
    "Collaboration": "#8D2B63"
};

const pricingLegend = [
    { symbol: "Os", description: "Open Source" },
    { symbol: "Fr", description: "Free" },
    { symbol: "Fm", description: "Freemium" },
    { symbol: "Pd", description: "Paid" },
    { symbol: "En", description: "Enterprise" },
];

const categoryLegend = [
    { color: "#812E58", description: "Source Control Mgmt." },
    { color: "#F16932", description: "Database Automation" },
    { color: "#4DA9D4", description: "Continuous Integration" },
    { color: "#A74233", description: "Testing" },
    { color: "#1F4D7D", description: "Configuration" },
    { color: "#54B288", description: "Deployment" },
    { color: "#434B4E", description: "Containers" },
    { color: "#499FC9", description: "Release Orchestration" },
    { color: "#FCC137", description: "Cloud" },
    { color: "#CB6D31", description: "AIOps" },
    { color: "#4D8C7B", description: "Analytics" },
    { color: "#444E55", description: "Monitoring" },
    { color: "#1A87A9", description: "Security" },
    { color: "#8D2B63", description: "Collaboration" },
];

const DevOpsTable = () => {
    const navigate = useNavigate(); // Initialize navigate for back navigation

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="relative min-h-screen"> {/* Full-screen container */}
            {/* Back button in the top left */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className="fixed top-4 left-4 p-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 z-50 
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
                <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
            </motion.button>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-7xl mx-auto my-12 p-8 bg-gray-900 bg-opacity-0 backdrop-blur-lg rounded-xl shadow-2xl min-h-[1000px] relative z-10"
            >
                <h1 className="text-3xl font-extrabold text-white text-center mb-8">
                    Periodic Table of <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">DevOps Tools</span>
                </h1>

                {/* Pricing Symbol Legend (Vertically Aligned) */}
                <div className="absolute top-[130px] left-[150px] flex flex-col justify-center space-y-2 mb-8">
                    {pricingLegend.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-lg text-white font-bold text-xs">
                                {item.symbol}
                            </div>
                            <span className="text-white text-xs">{item.description}</span>
                        </div>
                    ))}
                </div>

                {/* Color Category Legend (Vertically Aligned, Three Columns) */}
                <div className="absolute top-[130px] left-[300px] grid grid-cols-3 gap-x-8 gap-y-2 mb-8">
                    {categoryLegend.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <div
                                className="w-6 h-6 rounded-sm"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-white text-xs">{item.description}</span>
                        </div>
                    ))}
                </div>

                {/* The DevOps Table Grid */}
                <div className="grid grid-cols-[repeat(18,70px)] grid-rows-[repeat(10,70px)] gap-2 justify-center items-center mx-auto">
                    {data.elements.map((element) => (
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            key={element.name}
                            className="element flex flex-col items-center justify-center p-2 rounded-lg shadow-lg relative"
                            style={{
                                backgroundColor: devopsColorMap[element.category],
                                color: "white",
                                gridColumn: element.xpos,
                                gridRow: element.ypos,
                                width: "70px",
                                height: "70px",
                                borderColor: "rgba(255, 255, 255, 0.2)",
                                borderWidth: "1px",
                                position: "relative",
                            }}
                        >
                            <strong className="text-sm font-bold truncate">{element.symbol}</strong>
                            <small className="absolute top-1 left-1 text-xs">{element.number}</small>
                            <small className="absolute top-1 right-1 text-xs">{element.pricing_symbol}</small>
                            <small className="absolute bottom-1 left-1 text-[9px] text-left whitespace-normal leading-tight truncate">{element.name}</small>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default DevOpsTable;
