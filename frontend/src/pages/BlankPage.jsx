import { motion } from "framer-motion";

const BlankPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-11/12 h-screen max-h-screen mx-auto my-auto p-12 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
        >
            {/* Header or Title Section */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold leading-tight text-white">
                    Your Blank Page
                </h1>
            </header>

            {/* Main Content Area */}
            <div className="text-center text-gray-400">
                <p className="text-xl">
                    This is a blank page. You can add content here!
                </p>
            </div>

        </motion.div>
    );
};

export default BlankPage;