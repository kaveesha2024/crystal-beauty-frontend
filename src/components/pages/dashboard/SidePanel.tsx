import React from "react";
import { Link } from "react-router-dom";
import { Gauge, LogOut, Package, ShoppingBag, UserRound } from "lucide-react";

const SidePanel: React.FC = () => {
    return (
        <div className="sticky top-0 flex h-[100vh] w-[250px] flex-col items-center justify-between">
            <div className="flex h-[200px] w-full flex-col gap-2 pr-5">
                <h2 className="mb-5 pt-5 text-center text-3xl font-bold">Welcome Admin</h2>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/dashboard"
                >
                    <Gauge />
                    <p>Dashboard</p>
                </Link>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/"
                >
                    <UserRound />
                    Users
                </Link>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="products"
                >
                    <Package />
                    Products
                </Link>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/dashboard"
                >
                    <ShoppingBag />
                    Orders
                </Link>
            </div>
            <div className="mb-5 flex w-full flex-col gap-2 pr-5">
                <button className="active:text-accent hover:text-accent flex cursor-pointer items-center gap-1 p-3 transition duration-100 hover:scale-95">
                    <LogOut />
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default SidePanel;
