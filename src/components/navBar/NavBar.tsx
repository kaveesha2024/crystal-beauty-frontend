import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <div className="flex h-[40px] w-full items-center justify-center gap-5 bg-white font-bold hover:bg-[#FFEDFA]/90">
            <Link className="hover:text-accent" to="/">
                Home
            </Link>
            <Link className="hover:text-accent" to="/products">
                Products
            </Link>
            <Link className="hover:text-accent" to="/about-us">
                About Us
            </Link>
            <Link className="hover:text-accent" to="/contact">
                Contact Us
            </Link>
        </div>
    );
};

export default NavBar;
