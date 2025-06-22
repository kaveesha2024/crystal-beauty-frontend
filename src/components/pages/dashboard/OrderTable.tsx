import type React from "react";
import TableHeader from "../../../utility/reUsable/TableHeader";
import { orderTableHeader } from "../../../utility/others/refactor";
import type { IAllOrdersTypes, IOrderTablePropTypes } from "../../../utility/types/order/order";
const OrderTable: React.FC<IOrderTablePropTypes> = ({ allOrders, handleOrderPopupWindow }) => {
    return (
        <div className="relative max-w-full pr-20">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {orderTableHeader.map((column: string, index: number) => (
                            <TableHeader key={index} header={column} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allOrders.length > 0 ? (
                        allOrders.map((order: IAllOrdersTypes, index: number) => (
                            <tr
                                key={index}
                                onClick={(): void => handleOrderPopupWindow(order)}
                                className="cursor-pointer border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td className="px-6 py-4">{order.orderId}</td>
                                <td className="px-6 py-4">{order.customerName}</td>
                                <td className="px-6 py-4">{order.products.length}</td>
                                <td className="px-6 py-4">LKR {order.totalPrice.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    <span>
                                        {order.status === "pending" ? (
                                            <span className="text-amber-400">Pending</span>
                                        ) : order.status === "delivered" ? (
                                            <span className="text-green-400">Delivered</span>
                                        ) : (
                                            <span className="text-red-600">Cancelled</span>
                                        )}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                            <td className="px-6 py-4">No Orders were found !</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default OrderTable;
