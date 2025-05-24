import React from "react";
import {
  PhoneIcon,
  ShoppingCartIcon,
  HeartIcon,
  SearchIcon,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store.ts";
export const Header: React.FC = () => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.authentication);
  return (
    <header className="w-full">
      <div className="bg-[#1e1e19] text-[#FFEDFA] py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-end items-center text-sm">
            <div className="flex items-center">
              <PhoneIcon size={14} className="mr-2 text-[#D50B8B]" />
              <span>Customer Service: +1 (800) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="flex cursor-pointer items-center space-x-4"
            >
              <div className="w-12 h-12 bg-[#D50B8B] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">CBC</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-[#1e1e19]">
                  Cristal Beauty Clear
                </h1>
                <p className="text-sm text-gray-500">Beauty in Clarity</p>
              </div>
            </div>
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                />
                <SearchIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  if (state.isAuthenticated && state.role === "user") {
                    navigate("/profile");
                  } else if (state.isAuthenticated && state.role === "admin") {
                    navigate("/dashboard");
                  } else {
                    navigate("/signup");
                  }
                }}
                className="relative cursor-pointer p-2 hover:text-[#D50B8B] transition-colors"
              >
                <User size={24} />
              </button>
              <button className="relative cursor-pointer p-2 hover:text-[#D50B8B] transition-colors">
                <HeartIcon size={24} />
                <span className="absolute -top-1 -right-1 bg-[#D50B8B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="relative cursor-pointer p-2 hover:text-[#D50B8B] transition-colors">
                <ShoppingCartIcon size={24} />
                <span className="absolute -top-1 -right-1 bg-[#D50B8B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
