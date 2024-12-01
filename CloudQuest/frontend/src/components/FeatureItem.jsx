import { motion } from "framer-motion";

const FeatureItem = ({ text, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-1/3 lg:w-1/4 px-4 py-6 bg-gray-800 mt-6 shadow-lg rounded-lg flex-grow"
        >
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
            <h3 className="text-2xl text-gray-100 font-semibold">{text}</h3>
            <p className="text-md text-gray-400 mt-4">{description}</p>
        </motion.div>
    );
};

export default FeatureItem;