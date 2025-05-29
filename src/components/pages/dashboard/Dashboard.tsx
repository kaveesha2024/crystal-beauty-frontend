import React from "react";
import SidePanel from "./SidePanel.tsx";
import { Route, Routes } from "react-router-dom";
import Analytics from "./Analytics.tsx";
import Products from "./Products.tsx";
import Users from "./Users.tsx";
import UpdateUser from "./UpdateUser.tsx";
import AddProduct from "./AddProduct.tsx";

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <SidePanel />
            <div className="w-full">
                <Routes>
                    <Route path="/" element={<Analytics />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/add_product" element={<AddProduct />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/update/:id" element={<UpdateUser />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
