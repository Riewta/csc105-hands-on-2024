import React, { useState } from "react";

const AboutMe = () => {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-between p-10"
        >
            <div className="w-full md:w-1/2">
                <img
                    src="public/Image/2.jpeg"
                    alt="Artist"
                    className="w-full rounded-lg"
                />
            </div>
            <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
                <h2 className="text-3xl font-bold">About me</h2>
                <h3 className="text-xl font-semibold text-gray-700 mt-2">Chubby cat</h3>
                <p className="text-gray-600 mt-4">
                    {readMore
                        ? "Now, let’s talk about me, the real star here. I’m a cool, collected, and confident kitty. I love a good snuggle, but I also enjoy my independence. I’ll come to you when I want cuddles—and trust me, when I do, you’ll feel honored. 😼 But don’t think I’m aloof! I adore playing, exploring, and watching the world go by from my favorite sunny spot.\n" +
                        "\n" +
                        "I get along well with humans, kids, and even other pets, as long as they respect my royal boundaries. 👑 I won’t constantly demand your attention like some other needy felines (no offense to my Siamese cousins!), but I will always be there, silently judging—I mean, lovingly watching—you.\n"
                        : "Now, let’s talk about me, the real star here. I’m a cool, collected, and confident kitty. I love a good snuggle, but I also enjoy my independence. I’ll come to you when I want cuddles—and trust me, when I do, you’ll feel honored."}
                </p>
                <button
                    onClick={handleReadMore}
                    className="bg-green-800 text-white px-6 py-2 rounded-full mt-6 hover:bg-green-900 transition"
                >
                    {readMore ? "Read Less" : "Read More"}
                </button>
            </div>
        </section>
    );
};

export default AboutMe;