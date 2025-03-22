import React from "react";
import Button from "../Button.jsx";

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className="flex flex-wrap justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold">Phattarapong Chaichuen</h2>
            <div className="flex space-x-10">
                <a href="#Home" onClick={() => scrollToSection("Home")} className="text-gray-700 hover:text-white hover:bg-green-700 px-6 py-2 rounded-full transition">
                    Home
                </a>
                <a href="#AboutMe" onClick={() => scrollToSection("AboutMe")} className="text-gray-700 hover:text-white hover:bg-green-700 px-6 py-2 rounded-full transition">
                    About Me
                </a>
                <a href="#Gallery" onClick={() => scrollToSection("Gallery")} className="text-gray-700 hover:text-white hover:bg-green-700 px-6 py-2 rounded-full transition">
                    Gallery
                </a>
            </div>
            <Button text="Contact" onClick={() => alert("Contact clicked!")} />
        </nav>
    );
};

export default Navbar;