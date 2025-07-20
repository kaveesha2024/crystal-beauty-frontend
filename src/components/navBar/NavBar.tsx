import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
    const location = useLocation().pathname;
    return (
        <div className="flex h-[40px] w-full items-center justify-center gap-5 font-bold">
            <Link
                className={`hover:text-accent transition duration-300 hover:scale-95 ${location === "/" ? "text-accent scale-95" : ""}`}
                to="/"
            >
                Home
            </Link>
            <Link
                className={`hover:text-accent transition duration-300 hover:scale-95 ${location === "/products" ? "text-accent scale-95" : ""}`}
                to="/products"
            >
                Products
            </Link>
            <Link
                className={`hover:text-accent transition duration-300 hover:scale-95 ${location === "/about_us" ? "text-accent scale-95" : ""}`}
                to="/about_us"
            >
                About Us
            </Link>
            <Link
                className={`hover:text-accent transition duration-300 hover:scale-95 ${location === "/contact" ? "text-accent scale-95" : ""}`}
                to="/contact"
            >
                Contact Us
            </Link>
        </div>
    );
};

export default NavBar;
