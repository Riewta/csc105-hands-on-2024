import React, { useRef } from "react";
import Navbar from "./assets/Navbar.jsx";
import Home from "./page/Home";
import AboutMe from "./page/AboutMe";
import Gallery from "./page/Gallery";

const App = () => {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const galleryRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === "Home") homeRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === "AboutMe") aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === "Gallery") galleryRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Navbar scrollToSection={scrollToSection} />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutMeRef}>
                <AboutMe />
            </div>
            <div ref={galleryRef}>
                <Gallery />
            </div>
        </div>
    );
};

export default App;