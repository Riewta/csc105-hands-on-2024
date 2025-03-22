import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar.jsx";
const schema = z.object({
    number: z
        .number({ invalid_type_error: "Expected number, received nan" })
        .min(1, "Number must be at least 1")
        .max(100, "Number must be 100 or less"),
    q: z.enum(["love", "like"], {
        errorMap: () => ({ message: "Select either 'love' or 'like'" }),
    }),
    size: z.enum(["small", "medium", "large"], {
        errorMap: () => ({ message: "Select a valid size" }),
    }),
});

const FavouritesPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched",
    });

    const onSubmit = (data) => {
        const { number, q, size } = data;
        navigate(`/fav/${number}?q=${q}&size=${size}`);
    };

    return (
        <>

        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-xl font-bold mb-6 text-center">Favourites Page</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Number Field */}
                    <div>
                        <label className="block font-medium mb-1">Number:</label>
                        <input
                            type="number"
                            {...register("number", { valueAsNumber: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.number && (
                            <p className="text-red-600 text-sm mt-1">{errors.number.message}</p>
                        )}
                    </div>

                    {/* Q Select */}
                    <div>
                        <label className="block font-medium mb-1">Q:</label>
                        <select
                            {...register("q")}
                            className="w-full border border-gray-300 p-2 rounded"
                        >
                            <option value="">Select</option>
                            <option value="love">Love</option>
                            <option value="like">Like</option>
                        </select>
                        {errors.q && (
                            <p className="text-red-600 text-sm mt-1">{errors.q.message}</p>
                        )}
                    </div>

                    {/* Size Select */}
                    <div>
                        <label className="block font-medium mb-1">Size:</label>
                        <select
                            {...register("size")}
                            className="w-full border border-gray-300 p-2 rounded"
                        >
                            <option value="">Select</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        {errors.size && (
                            <p className="text-red-600 text-sm mt-1">{errors.size.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default FavouritesPage;