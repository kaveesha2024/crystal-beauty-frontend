import React from "react";
import OrderTable from "./OrderTable";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import type { IAllOrdersTypes } from "../../../utility/types/order/order";
import alert from "sweetalert2";
import Modal from "react-modal";
import OrderPopupWindow from "./OrderPopupWindow.tsx";

const Orders: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [allOrders, setAllOrders] = useState<IAllOrdersTypes[]>([]);
    const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
    const [selectedOrderInformation, setSelectedOrderInformation] = useState<IAllOrdersTypes>();
    useEffect((): void => {
        if (isLoading) {
            getAllOrders();
            setIsLoading(false);
        }
    }, [isLoading]);
    Modal.setAppElement("#root");
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
        alert
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            })
            .then(async result => {
                if (result.isConfirmed) {
                    try {
                        const response = await axios.delete(
                            "/api/delete_order/?orderId=" + orderId
                        );
                        if (response.status === 200) {
                            toast.success("Order deleted successfully");
                            setIsModelOpen(false);
                            getAllOrders();
                            return;
                        }
                    } catch (error) {
                        toast.error("Something went wrong, Please try again later");
                    }
                }
            });
    };
    const handleOrderPopupWindow = (order: IAllOrdersTypes) => {
        console.log(order);
        setIsModelOpen(true);
        setSelectedOrderInformation(order);
    };
    const closeOrderPopup = () => {
        setIsModelOpen(false);
    };
    const editOrderStatus = async (orderId: string, orderStatus: string): Promise<void> => {
        alert.showLoading();
        try {
            await axios.put("/api/edit_order_status", {
                orderId,
                status: orderStatus,
            });
            alert.close();
            setIsLoading(true);
        } catch (err) {
            toast.error("Please try again later");
            console.log(err);
            alert.close();
        }
    };
    // console.log(allOrders);
    return (
        <>
            <Modal isOpen={isModelOpen} onRequestClose={closeOrderPopup}>
                <OrderPopupWindow
                    selectedOrderInformation={selectedOrderInformation}
                    setIsModelOpen={setIsModelOpen}
                    deleteOrder={deleteOrder}
                    editOrderStatus={editOrderStatus}
                />
            </Modal>
            <OrderTable allOrders={allOrders} handleOrderPopupWindow={handleOrderPopupWindow} />
        </>
    );
};
export default Orders;
