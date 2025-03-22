import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import FavouritesPage from "./page/FavouritesPage";
import FavouriteDetailPage from "./page/FavouriteDetailPage";
import SignUpPage from "./Page/SignUpPage.jsx";
import NotFoundPage from "./Page/NotFoundPage.jsx";
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
        ],
    },
    { path: "", element: <HomePage /> },
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignUpPage /> },

    { path: "favourites", element: <FavouritesPage /> },
    { path: "favourites/:id", element: <FavouriteDetailPage /> },

    {
        path: "/fav",
        children: [
            { path: "", element: <FavouritesPage /> },
            { path: ":id", element: <FavouriteDetailPage /> },
        ]
    },
    {
        path: "*", element: <NotFoundPage />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);