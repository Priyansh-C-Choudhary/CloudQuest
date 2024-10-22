import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Features from '../components/Features'; // Importing the Features component

const DashboardPage = () => {
	const { user, logout } = useAuthStore();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
	};

	const handleStartLearning = () => {
		navigate("/learning");
	};

	const handleUserInfo = () => {
		navigate("/user-information");
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className="w-11/12 h-screen max-h-screen mx-auto my-auto p-12 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
		>
			{/* User Button at Top Left with Icon */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={handleUserInfo}
				className="absolute top-4 left-4 py-1 px-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 
				focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center space-x-2"
			>
				<FontAwesomeIcon icon={faUser} className="text-white" /> {/* User icon */}
				<span>User</span>
			</motion.button>

			{/* Start Learning Button - Updated for Center Alignment */}
			<div className="flex justify-center mt-4">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleStartLearning}
					className="py-2 px-6 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-full shadow-lg 
					hover:from-green-500 hover:to-emerald-600 
					focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
				>
					Start Learning
				</motion.button>
			</div>

			{/* Logout Button at Top Right with Icon */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={handleLogout}
				className="absolute top-4 right-4 py-1 px-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 
				focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center space-x-2"
			>
				<span>Logout</span>
				<FontAwesomeIcon icon={faSignOutAlt} className="text-white" /> {/* Logout icon */}
			</motion.button>

			{/* Feature Section Below Buttons */}
			<section className="relative mt-12">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="pt-12 pb-12 md:pt-20 md:pb-16 text-center">
						<h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter text-white mb-4">
							Accelerate <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">Your Cloud & DevOps Journey</span>
						</h1>
						<p className="text-xl text-gray-300 mb-8">
						Start mastering the skills that power the future of tech. Whether you’re beginning your DevOps journey or advancing your cloud expertise, CloudQuest is here to guide you with study paths, real-world learning paths & certification guidance, . 
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<Features />
		</motion.div>
	);
};

export default DashboardPage;
