import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import type { IAllOrdersTypes } from "../../../utility/types/order/order";
import MyOrdersSection from "./MyOrdersSection.tsx";
const MyOrders: React.FC = () => {
    const { userId } = useSelector((state: RootState) => state.authentication);
    const [isLoading, setIsLoading] = useState(true);
    const [allOrders, setAllOrders] = useState<IAllOrdersTypes[]>([]);
    useEffect(() => {
        if (isLoading) {
            getOrders();
            setIsLoading(false);
        }
    }, [isLoading]);
    window.scrollTo(0, 0);
    const getOrders = async (): Promise<void> => {
        try {
            const response = await axios.get("/api/get_order_by_user_id/?userId=" + userId);
            if (response.data.status === 200) {
                setAllOrders(response.data.message);
                return;
            }
        } catch (e) {
            console.log(e);
        }
    };
    return <MyOrdersSection allOrders={allOrders} />;
};

export default MyOrders;
