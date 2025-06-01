import React from "react";
import { PhoneIcon, ShoppingCartIcon, HeartIcon, SearchIcon, User } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store.ts";
export const Header: React.FC = () => {
    const navigate = useNavigate();
    const { role, isAuthenticated, userId } = useSelector(
        (state: RootState) => state.authentication
    );
    const { cart } = useSelector((state: RootState) => state.cart);
    return (
        <header className="w-full">
            <div className="bg-secondary py-2 text-[#FFEDFA]">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center text-sm md:justify-end">
                        <div className="flex items-center">
                            <PhoneIcon size={14} className="mr-2 text-[#D50B8B]" />
                            <span>Customer Service: 074 085 9676</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div
                            onClick={() => {
                                navigate("/");
                            }}
                            className="flex cursor-pointer items-center space-x-4"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D50B8B]">
                                <span className="text-xl font-bold text-white">CBC</span>
                            </div>
                            <div className="hidden md:block">
                                <h1 className="text-xl font-bold text-[#1e1e19]">
                                    Crystal Beauty Clear
                                </h1>
                                <p className="text-sm text-gray-500">Beauty in Clarity</p>
                            </div>
                        </div>
                        <div className="mx-6 hidden max-w-md flex-1 md:flex">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full rounded-md border border-gray-200 py-2 pr-10 pl-4 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                />
                                <SearchIcon className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => {
                                    if (isAuthenticated && role === "user") {
                                        navigate("/profile/" + userId);
                                    } else if (isAuthenticated && role === "admin") {
                                        navigate("/dashboard");
                                    } else {
                                        navigate("/signin");
                                    }
                                }}
                                className="relative cursor-pointer p-2 transition-colors hover:text-[#D50B8B]"
                            >
                                <User size={24} />
                            </button>
                            <button className="relative cursor-pointer p-2 transition-colors hover:text-[#D50B8B]">
                                <HeartIcon size={24} />
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D50B8B] text-xs text-white">
                                    0
                                </span>
                            </button>
                            <Link
                                to="/cart"
                                className="relative cursor-pointer p-2 transition-colors hover:text-[#D50B8B]"
                            >
                                <ShoppingCartIcon size={24} />
                                {cart.length > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D50B8B] text-xs text-white">
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
