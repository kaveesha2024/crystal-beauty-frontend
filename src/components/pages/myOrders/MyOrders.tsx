import React from "react";
import { type NavigateFunction, useNavigate } from "react-router-dom";

// Define types for better TypeScript support
type OrderProduct = {
    productId: string;
    quantity: number;
    price: number;
    productName: string;
};

type Order = {
    orderId: string;
    products: OrderProduct[];
    totalPrice: number;
    status: "pending" | "delivered" | "cancelled" | "returned" | "processing";
    address: string;
    phoneNumber: string;
    customerName: string;
    paymentMethod: "cashOnDelivery" | "creditCard" | "paypal";
    createdAt: string; // Added for order date
};

const MyOrders: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    window.scrollTo(0, 0);
    // Sample data - replace with your actual data fetching logic
    const orders: Order[] = [
        {
            orderId: "ORD-12345",
            products: [
                {
                    productId: "PROD-001",
                    productName: "Rose Quartz Facial Serum",
                    price: 24.99,
                    quantity: 2,
                },
                {
                    productId: "PROD-002",
                    productName: "Hyaluronic Acid Moisturizer",
                    price: 19.99,
                    quantity: 1,
                },
            ],
            totalPrice: 69.97,
            status: "delivered",
            address: "123 Beauty St, Cosmetic City",
            phoneNumber: "+1234567890",
            customerName: "Jane Doe",
            paymentMethod: "creditCard",
            createdAt: "2023-05-15",
        },
        {
            orderId: "ORD-12346",
            products: [
                {
                    productId: "PROD-003",
                    productName: "Vitamin C Brightening Cream",
                    price: 29.99,
                    quantity: 1,
                },
            ],
            totalPrice: 29.99,
            status: "processing",
            address: "123 Beauty St, Cosmetic City",
            phoneNumber: "+1234567890",
            customerName: "Jane Doe",
            paymentMethod: "paypal",
            createdAt: "2023-06-20",
        },
    ];

    // Status colors mapping
    const statusColors = {
        pending: "bg-yellow-100 text-yellow-800",
        delivered: "bg-green-100 text-green-800",
        cancelled: "bg-red-100 text-red-800",
        returned: "bg-purple-100 text-purple-800",
        processing: "bg-blue-100 text-blue-800",
    };

    // Payment method icons
    const paymentIcons = {
        cashOnDelivery: "💵",
        creditCard: "💳",
        paypal: "🔵",
    };

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
                    {orders.length === 0 ? (
                        <div className="py-12 text-center">
                            <p className="text-lg text-gray-500">
                                You haven't placed any orders yet.
                            </p>
                            <button className="mt-4 rounded-full bg-[#D50B8B] px-6 py-2 font-medium text-white transition duration-200 hover:bg-[#C40A7D]">
                                Shop Now
                            </button>
                        </div>
                    ) : (
                        orders.map(order => (
                            <div
                                key={order.orderId}
                                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-200 hover:shadow-md"
                            >
                                <div className="p-5 sm:p-6">
                                    {/* Order header */}
                                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                Order #{order.orderId}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Placed on{" "}
                                                {new Date(order.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[order.status]}`}
                                            >
                                                {order.status.charAt(0).toUpperCase() +
                                                    order.status.slice(1)}
                                            </span>
                                            <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                                                {paymentIcons[order.paymentMethod]}{" "}
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
                                            {order.products.map(product => (
                                                <li
                                                    key={product.productId}
                                                    className="flex items-start"
                                                >
                                                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                                        {/* Product image placeholder - replace with actual image */}
                                                        <div className="flex h-full w-full items-center justify-center text-gray-400">
                                                            🧴
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 flex-1">
                                                        <h5 className="text-sm font-medium text-gray-900">
                                                            {product.productName}
                                                        </h5>
                                                        <p className="text-sm text-gray-500">
                                                            Qty: {product.quantity} × $
                                                            {product.price.toFixed(2)}
                                                        </p>
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        $
                                                        {(product.price * product.quantity).toFixed(
                                                            2
                                                        )}
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
                                                    ${order.totalPrice.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order actions */}
                                    <div className="mt-4 flex flex-wrap gap-3 border-t border-gray-100 pt-4">
                                        <button className="rounded-lg border border-[#D50B8B] px-3 py-1.5 text-sm font-medium text-[#D50B8B] transition hover:bg-[#D50B8B]/5 hover:text-[#C40A7D]">
                                            Track Order
                                        </button>
                                        <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900">
                                            View Details
                                        </button>
                                        {order.status === "delivered" && (
                                            <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900">
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

export default MyOrders;
