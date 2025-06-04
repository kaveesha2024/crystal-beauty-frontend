import type React from "react";
import OrderTable from "./OrderTable";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import type { IAllOrdersTypes } from "../../../utility/types/order/order";
import Swal from "sweetalert2";

const Orders: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [allOrders, setAllOrders] = useState<IAllOrdersTypes[]>([]);
    useEffect(() => {
        if (isLoading) {
            getAllOrders();
            setIsLoading(false);
        }
    }, []);
    const getAllOrders = async (): Promise<void> => {
        try {
            const orders = await axios.get("/api/get_all_orders");
            if (orders.data.message === "No orders found") {
                setAllOrders([]);
                return;
            }
            if (orders.status === 200) {
                setAllOrders(orders.data.message);
            }
        } catch (err) {
            toast.error("Something went wrong, Please try again later");
        }
    };
    const deleteOrder = async (orderId: string): Promise<void> => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete("/api/delete_order/?orderId=" + orderId);
                    if (response.status === 200) {
                        toast.success("Order deleted successfully");
                        getAllOrders();
                        return;
                    }
                } catch (error) {
                    toast.error("Something went wrong, Please try again later");
                }
            }
        });
    };
    return <OrderTable deleteOrder={deleteOrder} allOrders={allOrders} />;
};
export default Orders;
