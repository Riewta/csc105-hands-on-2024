import React from "react";

const Home = () => {
    return (
        <section id="Home" className="flex flex-col items-center text-center p-10">
            <div className="flex flex-col-reverse sm:flex-row items-center gap-6 mt-6">
                <div className="sm:w-1/2">
                    <div className="text-left">
                        <h3 className="text-lg">Hello, It's me</h3>
                        <h1 className="text-4xl font-bold">Chubby Cat</h1>
                        <h3 className="text-lg">I'm an Fuyuki</h3>
                        <p className="text-gray-600 max-w-lg mt-4">
                            Please hold your breath as we dive into a world full of cuteness with Fuyuki.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <img src="public/Icons/Facebook.svg" alt="Facebook" className="w-8" />
                            <img src="public/Icons/Instagram.svg" alt="Instagram" className="w-8" />
                            <img src="public/Icons/Email.svg" alt="Email" className="w-8" />
                        </div>
                        <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition mt-6">
                            My Portfolio
                        </button>
                    </div>
                </div>
                <div className="sm:w-1/2">
                    <img src="public/Image/1.jpeg" alt="Gallery 1" className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Home;