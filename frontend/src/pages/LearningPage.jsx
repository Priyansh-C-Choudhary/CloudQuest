import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Importing cloud and home icons
import { useNavigate } from "react-router-dom"; // For navigation

// Infinity path animation for DevOps button
const infinityPathAnimation = {
    loop: {
        pathLength: [0, 1, 0],
        opacity: [0.4, 1, 0.4],
        transition: {
            duration: 10, // Slower animation for smooth flow
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

// Cloud animation similar to infinity symbol
const cloudAnimation = {
    loop: {
        opacity: [0.4, 1, 0.4],
        pathLength: [0, 1, 0],
        transition: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

const LearningPage = () => {
    const navigate = useNavigate(); // For navigation

    // Function to navigate to home
    const handleHomeClick = () => {
        navigate("/"); // Navigate to home page
    };

    // Function to navigate to DevOps page
    const handleDevOpsClick = () => {
        navigate("/devops"); // Navigate to DevOpsPage
    };

    // Function to navigate to Cloud page
    const handleCloudClick = () => {
        navigate("/cloud"); // Navigate to CloudPage
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen max-h-screen mx-auto p-12 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg relative"
        >
            {/* Home Button in Top-Left Corner */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHomeClick} // Trigger navigation to home page
                className="absolute top-4 left-4 py-2 px-6 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full shadow-lg flex items-center space-x-2"
            >
                <FontAwesomeIcon icon={faHome} className="text-white text-xl" /> {/* Home icon */}
                <span>Home</span>
            </motion.button>

            {/* Page is divided into two halves */}
            <div className="flex h-full">

                {/* DevOps Section */}
                <div
                    className="flex-1 flex justify-center items-center border-r border-gray-700 relative cursor-pointer" // Added cursor-pointer to indicate clickable
                    onClick={handleDevOpsClick} // Click handler to navigate to DevOpsPage
                >
                    {/* Light Static Infinity Background */}
                    <svg
                        width="500"
                        height="300"
                        viewBox="0 0 300 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute"
                        style={{ opacity: 0.1, zIndex: 0 }}
                    >
                        <path
                            d="
                                M 50,100
                                C 50,50 150,50 150,100
                                C 150,150 250,150 250,100
                                C 250,50 150,50 150,100
                                C 150,150 50,150 50,100 Z
                            "
                            stroke="#ffffff"
                            strokeWidth="8"
                            fill="transparent"
                        />
                    </svg>

                    {/* Animated Infinity Symbol */}
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col justify-center items-center text-white relative z-10"
                    >
                        <svg
                            width="500"
                            height="300"
                            viewBox="0 0 300 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-8"
                        >
                            <motion.path
                                d="
                                    M 50,100
                                    C 50,50 150,50 150,100
                                    C 150,150 250,150 250,100
                                    C 250,50 150,50 150,100
                                    C 150,150 50,150 50,100 Z
                                "
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                fill="transparent"
                                variants={infinityPathAnimation}
                                animate="loop"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#4f46e5" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <span className="text-5xl font-bold">DevOps</span>
                    </motion.div>
                </div>

                {/* Cloud Section */}
                <div
                    className="flex-1 flex justify-center items-center relative cursor-pointer" // Added cursor-pointer to indicate clickable
                    onClick={handleCloudClick} // Click handler to navigate to CloudPage
                >
                    {/* Light Static Cloud Background */}
                    <svg
                        width="500"
                        height="300"
                        viewBox="0 0 300 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute"
                        style={{ opacity: 0.1, zIndex: 0 }}
                    >
                        <path
                            d="M 150 100
                                C 130 70 90 70 70 100
                                C 50 130 90 170 120 150
                                C 150 170 190 150 180 120
                                C 200 130 240 110 230 90
                                C 210 50 160 80 150 100 Z"
                            stroke="#ffffff"
                            strokeWidth="8"
                            fill="transparent"
                        />
                    </svg>

                    {/* Animated Cloud Symbol */}
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col justify-center items-center text-white relative z-10"
                    >
                        <svg
                            width="500"
                            height="300"
                            viewBox="0 0 300 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-8"
                        >
                            <motion.path
                                d="M 150 100
                                    C 130 70 90 70 70 100
                                    C 50 130 90 170 120 150
                                    C 150 170 190 150 180 120
                                    C 200 130 240 110 230 90
                                    C 210 50 160 80 150 100 Z"
                                stroke="url(#cloudGradient)"
                                strokeWidth="8"
                                fill="transparent"
                                variants={cloudAnimation}
                                animate="loop"
                            />
                            <defs>
                                <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#34d399" />
                                    <stop offset="100%" stopColor="#10b981" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <span className="text-5xl font-bold">Cloud</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default LearningPage;
