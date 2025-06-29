import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import type { IAnalyticsSectionPropTypes } from "../../../utility/types/analytics/analytics";
import type { IGetAllUsersResponseTypes } from "../../../utility/types/getAllUsers/getAllUsers";
import type { IAllOrdersTypes } from "../../../utility/types/order/order";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";

const AnalyticsSection: React.FC<IAnalyticsSectionPropTypes> = ({
    numberOfProducts,
    numberOfUsers,
    numberOfOrders,
    latestUsers,
    latestOrders,
    latestProducts,
}) => {
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
                    <p className="text-3xl font-bold text-blue-600">{numberOfUsers}</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Total Orders</h3>
                    <p className="text-3xl font-bold text-green-600">{numberOfOrders}</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">Total Products</h3>
                    <p className="text-3xl font-bold text-purple-600">{numberOfProducts}</p>
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
                        {latestUsers.map((user: IGetAllUsersResponseTypes, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                            >
                                <div className="h-10 w-10 rounded-full bg-gray-200">
                                    <img
                                        src={user.profilePicture}
                                        alt={user.firstName}
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium">{user.firstName}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">Latest Orders</h3>
                    <div className="space-y-4">
                        {latestOrders.map((order: IAllOrdersTypes, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-md p-2 hover:bg-gray-50"
                            >
                                <div>
                                    <p className="font-medium">{order.orderId}</p>
                                    <p className="text-sm text-gray-500">{order.products.length} items - Rs. {order.totalPrice.toLocaleString()}</p>
                                </div>
                                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${order.status === "pending" ? "bg-yellow-100 text-yellow-800" : order.status === "delivered" ? "bg-green-100 text-green-800" : order.status === "processing" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}`}>
                                    {order.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">Latest Products</h3>
                    <div className="space-y-4">
                        {latestProducts.map((product: IAllProductsTypes, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                            >
                                <div className="h-16 w-16 rounded-md bg-gray-200">
                                    <img
                                        src={product.images[0]}
                                        alt={product.productName}
                                        className="h-full w-full object-cover rounded-md"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium">{product.productName}</p>
                                    <p className="text-sm text-gray-500">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsSection;
