import type React from "react";
import TableHeader from "../../../utility/reUsable/TableHeader";
import { orderTableHeader } from "../../../utility/others/refactor";
import type { IAllOrdersTypes, IOrderTablePropTypes } from "../../../utility/types/order/order";
import { DeleteIcon, Pencil } from "lucide-react";

const OrderTable: React.FC<IOrderTablePropTypes> = ({ allOrders, deleteOrder }) => {
    console.log("Orders: ", allOrders);

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
                    {allOrders.length > 0
                        ? allOrders.map((order: IAllOrdersTypes, index: number) => (
                              <tr
                                  key={index}
                                  className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                              >
                                  <td className="px-6 py-4">{order.orderId}</td>
                                  <td className="px-6 py-4">{order.userId}</td>
                                  <td className="px-6 py-4">{order.createdAt}</td>
                                  <td className="px-6 py-4">{order.products.length}</td>
                                  <td className="px-6 py-4">{order.totalPrice}</td>
                                  {order.status === "pending" ? (
                                      <td className="px-6 py-4 text-amber-400">Pending</td>
                                  ) : order.status === "delivered" ? (
                                      <td className="px-6 py-4 text-green-400">Delivered</td>
                                  ) : (
                                      <td className="px-6 py-4 text-red-600">Canceled</td>
                                  )}

                                  <td className="px-6 py-4">{order.address}</td>
                                  <td className="px-6 py-4">{order.phoneNumber}</td>
                                  <td className="px-6 py-4">{order.paymentMethod}</td>
                                  <td className="px-6 py-4">{order.customerName}</td>
                                  <td className="flex h-full items-center justify-center gap-1 px-6 py-4">
                                      <button className="cursor-pointer text-sky-800 active:text-black">
                                          <Pencil />
                                      </button>
                                      <button
                                          onChange={() => deleteOrder(order.orderId)}
                                          className="cursor-pointer text-red-800 active:text-black"
                                      >
                                          <DeleteIcon />
                                      </button>
                                  </td>
                              </tr>
                          ))
                        : "No Orders"}
                </tbody>
            </table>
        </div>
    );
};
export default OrderTable;
