import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to use for navigation to new pages

const CoursePagePlaceholder = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-10">Select Your Path</h1>
            <div className="flex space-x-10">
                <Link to="/devops">
                    <div className="w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
                        <h2 className="text-xl">DevOps</h2>
                    </div>
                </Link>
                <Link to="/cloud">
                    <div className="w-40 h-40 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-700 transition duration-300 cursor-pointer">
                        <h2 className="text-xl">Cloud</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CoursePagePlaceholder;
