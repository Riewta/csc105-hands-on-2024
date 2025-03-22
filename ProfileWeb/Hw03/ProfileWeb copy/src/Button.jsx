import React from "react";

const Button = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900  transition ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;