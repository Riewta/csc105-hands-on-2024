import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-sm">
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    404 - Page Not Found
                </h1>
                <p className="text-gray-600 mb-6">
                    Oops! The page you're looking for doesn’t exist.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;