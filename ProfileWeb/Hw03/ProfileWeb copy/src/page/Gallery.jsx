import React from "react";

const Gallery = () => {
    return (
        <section id="gallery" className="p-10">
            <h2 className="text-3xl font-bold text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="aspect-w-2 aspect-h-3">
                    <img src="public/Image/1.jpeg" alt="Gallery 1" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="aspect-w-2 aspect-h-3">
                    <img src="public/Image/2.jpeg" alt="Gallery 2" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="aspect-w-2 aspect-h-3">
                    <img src="public/Image/3.jpeg" alt="Gallery 3" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="aspect-w-2 aspect-h-3">
                    <img src="public/Image/7.jpeg" alt="Gallery 4" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="aspect-w-2 aspect-h-3">
                    <img src="public/Image/5.jpeg" alt="Gallery 5" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="aspect-w-2 aspect-h-3">
                    <img src="public/Image/9.jpeg" alt="Gallery 6" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;