import React from "react";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import type { IAllOrdersTypes, IOrderProductsTypes } from "../../../utility/types/order/order";
import { paymentIcon, statusColor } from "../../../utility/others/refactor.ts";

interface MyOrdersSectionPropTypes {
    allOrders: IAllOrdersTypes[];
}
const MyOrdersSection: React.FC<MyOrdersSectionPropTypes> = ({ allOrders }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center text-[#D50B8B] transition duration-200 hover:text-[#C40A7D]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to Profile
                </button>
                <div className="mb-10 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">My Orders</h1>
                    <p className="text-gray-600">View and manage your cosmetic orders</p>
                </div>

                <div className="space-y-6">
                    {allOrders.length === 0 ? (
                        <div className="py-12 text-center">
                            <p className="text-lg text-gray-500">
                                You haven't placed any orders yet.
                            </p>
                            <button className="mt-4 rounded-full bg-[#D50B8B] px-6 py-2 font-medium text-white transition duration-200 hover:bg-[#C40A7D]">
                                Shop Now
                            </button>
                        </div>
                    ) : (
                        allOrders.map((order: IAllOrdersTypes, index: number) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-200 hover:shadow-md"
                            >
                                <div className="p-5 sm:p-6">
                                    {/* Order header */}
                                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                Order {order.orderId}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Placed on
                                                {new Date(order.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(order.status)}`}
                                            >
                                                {order.status.charAt(0).toUpperCase() +
                                                    order.status.slice(1)}
                                            </span>
                                            <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                                                {/*{paymentIcons[order.paymentMethod]}*/}
                                                {paymentIcon(order.paymentMethod)}
                                                {order.paymentMethod}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Order items */}
                                    <div className="mt-4 border-t border-gray-100 pt-4">
                                        <h4 className="mb-3 text-sm font-medium text-gray-700">
                                            Products
                                        </h4>
                                        <ul className="space-y-3">
                                            {order.products.map((product: IOrderProductsTypes) => (
                                                <li
                                                    key={product.productId}
                                                    className="flex items-start"
                                                >
                                                    <div className="ml-4 flex-1">
                                                        <h5 className="text-sm font-medium text-gray-900">
                                                            {product.productName}
                                                        </h5>
                                                        <p className="text-sm text-gray-500">
                                                            Qty: {product.quantity} × Rs.{" "}
                                                            <span>
                                                                {product.price.toLocaleString()}/=
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        Rs.{" "}
                                                        <span>
                                                            {(
                                                                product.price * product.quantity
                                                            ).toLocaleString()}
                                                        </span>
                                                        /=
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Order summary */}
                                    <div className="mt-4 border-t border-gray-100 pt-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Delivered to
                                                </p>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {order.customerName}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {order.address}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {order.phoneNumber}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">Total</p>
                                                <p className="text-xl font-bold text-[#D50B8B]">
                                                    Rs. {order.totalPrice?.toLocaleString()}/=
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order actions */}
                                    <div className="mt-4 flex flex-wrap gap-3 border-t border-gray-100 pt-4">
                                        <button
                                            disabled={true}
                                            className="cursor-not-allowed rounded-lg border border-[#D50B8B] px-3 py-1.5 text-sm font-medium text-[#D50B8B] transition hover:bg-[#D50B8B]/5 hover:text-[#C40A7D]"
                                        >
                                            Track Order
                                        </button>
                                        <button
                                            disabled={true}
                                            className="cursor-not-allowed rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                                        >
                                            View Details
                                        </button>
                                        {order.status === "delivered" && (
                                            <button
                                                disabled={true}
                                                className="cursor-not-allowed rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                Buy Again
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyOrdersSection;
