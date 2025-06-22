import React, { useState } from "react";
import { orderStatusOptions, statusRing } from "../../../utility/others/refactor.ts";
import type {
    IOrderStatusOptionsTypes,
    OrderPopupWindowPropTypes,
} from "../../../utility/types/order/order";
const OrderPopupWindow: React.FC<OrderPopupWindowPropTypes> = ({
    selectedOrderInformation: order,
    setIsModelOpen,
    deleteOrder,
    onStatusChange,
}) => {
    const [status, setStatus] = useState(order?.status ?? "");
    if (!order) {
        return <div>No order selected</div>;
    }
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
        if (onStatusChange) onStatusChange(order.orderId, e.target.value);
    };
    const selectedOption = orderStatusOptions.find(
        (opt: IOrderStatusOptionsTypes): boolean => opt.value === status
    );
    return (
        <div onClick={e => e.stopPropagation()}>
            <h2 className="mb-4 text-2xl font-bold text-[#D50B8B]">Order Details</h2>
            <div className="mt-4 border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
                <p>
                    <span className="font-medium">Order ID:</span> {order.orderId}
                </p>
                <div className="my-2 flex items-center">
                    <span className="font-medium">Status:</span>
                    <div className="relative ml-2">
                        <select
                            className={`cursor-pointer appearance-none rounded-lg border-2 bg-white px-4 py-1 pr-8 transition focus:ring-2 focus:outline-none ${statusRing[status as keyof typeof statusRing] || "border-gray-300"} ${selectedOption?.color ?? ""}`}
                            value={status}
                            onChange={handleStatusChange}
                            style={{
                                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                                minWidth: 130,
                                fontWeight: 500,
                            }}
                        >
                            {orderStatusOptions.map((option: IOrderStatusOptionsTypes) => (
                                <option key={option.value}>{option.value}</option>
                            ))}
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform text-xl text-gray-600">
                            ▼
                        </span>
                    </div>
                </div>
                <p>
                    <span className="font-medium">Total Price:</span>
                    <span className="font-bold">
                        Rs.
                        {order.totalPrice.toLocaleString()}
                    </span>
                </p>
                <p>
                    <span className="font-medium">Payment Method:</span> {order.paymentMethod}
                </p>
            </div>
            <div className="mt-4 border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-700">Customer Information</h3>
                <p>
                    <span className="font-medium">Name:</span> {order.customerName}
                </p>
                <p>
                    <span className="font-medium">Address:</span> {order.address}
                </p>
                <p>
                    <span className="font-medium">Phone Number:</span> {order.phoneNumber}
                </p>
            </div>
            <div className="mt-4 border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-700">Products</h3>
                <table className="mt-2 min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 text-left">Product Name</th>
                            <th className="py-2 text-left">Quantity</th>
                            <th className="py-2 text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {order.products.map(product => (
                            <tr key={product.productId}>
                                <td className="py-2">{product.productName}</td>
                                <td className="py-2">{product.quantity}</td>
                                <td className="py-2">Rs. {product.price.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Timestamps</h3>
                <p>
                    <span className="font-medium">Created At:</span>{" "}
                    {new Date(order.createdAt).toLocaleString()}
                </p>
            </div>
            <div className="mt-6 flex justify-between">
                <button
                    onClick={() => deleteOrder(order.orderId)}
                    className="hover:bg-opacity-80 cursor-pointer rounded bg-red-500 px-4 py-2 text-white transition"
                >
                    Delete Order
                </button>
                <button
                    onClick={() => setIsModelOpen(false)}
                    className="hover:bg-opacity-80 cursor-pointer rounded bg-[#D50B8B] px-4 py-2 text-white transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default OrderPopupWindow;
