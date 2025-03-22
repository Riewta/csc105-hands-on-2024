import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Navbar from "../components/Navbar.jsx";

// Zod Schema
const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched",
    });

    const onSubmit = (data) => {
        console.log("Login submitted:", data);
    };

    return (
        <>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className=" bg-white shadow-md rounded-md p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className="w-full border border-gray-400 p-2 rounded"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                {...register("password")}
                                className="w-full border border-gray-400 p-2 rounded"
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-center mt-4">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-blue-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;