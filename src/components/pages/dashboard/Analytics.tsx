import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import { useNavigate } from "react-router-dom";

const Analytics: React.FC = () => {
    const navigate = useNavigate();
    const { profilePicture, userId } = useSelector((state: RootState) => state.authentication);
    return (
        <div className="mb-5 h-full w-full px-5 pt-5">
            <nav className="mb-8 flex w-full items-center justify-between">
                <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
                <div
                    className="hover:text-accent flex cursor-pointer items-center gap-2 transition duration-100 hover:scale-95"
                    onClick={() => {
                        navigate(`/profile/${userId}`);
                    }}
                >
                    <p>Profile</p>
                    <img
                        src={profilePicture}
                        alt="profile"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                </div>
            </nav>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-600">2,450</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Total Orders</h3>
                    <p className="text-3xl font-bold text-green-600">1,280</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Total Products</h3>
                    <p className="text-3xl font-bold text-purple-600">3,890</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Total Revenue</h3>
                    <p className="text-3xl font-bold text-orange-600">$12,380</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">Latest Users</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6].map(user => (
                            <div
                                key={user}
                                className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                            >
                                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-medium">User Name</p>
                                    <p className="text-sm text-gray-500">user@email.com</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">Latest Orders</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6].map(order => (
                            <div
                                key={order}
                                className="flex items-center justify-between rounded-md p-2 hover:bg-gray-50"
                            >
                                <div>
                                    <p className="font-medium">Order #12345</p>
                                    <p className="text-sm text-gray-500">2 items - $99.00</p>
                                </div>
                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                                    Completed
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">Latest Products</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map(product => (
                            <div
                                key={product}
                                className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                            >
                                <div className="h-16 w-16 rounded-md bg-gray-200"></div>
                                <div>
                                    <p className="font-medium">Product Name</p>
                                    <p className="text-sm text-gray-500">$49.99</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Analytics;
