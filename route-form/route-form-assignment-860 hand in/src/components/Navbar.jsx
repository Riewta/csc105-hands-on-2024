import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-8 p-4 shadow-md bg-amber-500">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}>
                Home
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}>
                Login
            </NavLink>
            <NavLink to="/favourites" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}>
                Favourites
            </NavLink>
        </nav>
    );
};

export default Navbar;