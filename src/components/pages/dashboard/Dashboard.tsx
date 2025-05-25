import React from "react";
import SidePanel from "./SidePanel.tsx";
import { Route, Routes } from "react-router-dom";
import Analytics from "./Analytics.tsx";
import Products from "./Products.tsx";

const Dashboard: React.FC = () => {
    return (
        <div className="flex px-5">
            <SidePanel />
            <div className="w-full bg-red-900">
                <p className="bg-green-300">
                    <Routes>
                        <Route path="/" element={<Analytics />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
