import React from "react";
import SidePanel from "./SidePanel.tsx";
import { Route, Routes } from "react-router-dom";
import Analytics from "./Analytics.tsx";
import Products from "./Products.tsx";
import Users from "./Users.tsx";

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <SidePanel />
            <div className="w-full">
                <Routes>
                    <Route path="/" element={<Analytics />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
