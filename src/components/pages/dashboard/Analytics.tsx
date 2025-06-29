import React, { useEffect, useState } from "react";
import AnalyticsSection from "./AnalyticsSection.tsx";
import axios from "axios";
import type { IAnalitics } from "../../../utility/types/analytics/analytics";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Analytics: React.FC = () => {
    const [analytics, setAnalytics] = useState<IAnalitics>({
        numberOfOrders: 0,
        numberOfProducts: 0,
        numberOfUsers: 0,
        latestUsers: [],
        latestOrders: [],
        latestProducts: [],
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect((): void => {
        if (isLoading) {
            fetchData();
            setIsLoading(!isLoading);
        }
    }, [isLoading]);
    const fetchData = async (): Promise<void> => {
        Swal.showLoading();
        try {
            const response = await axios.get("/api/analytics");
            Swal.close();
            if (response.status === 200) {
                setAnalytics((prevState: IAnalitics) => ({
                    ...prevState,
                    numberOfOrders: response.data.numberOfOrders,
                    numberOfProducts: response.data.numberOfProducts,
                    numberOfUsers: response.data.numberOfUsers,
                    latestUsers: response.data.latestUsers,
                    latestOrders: response.data.latestOrders,
                    latestProducts: response.data.latestProducts,
                }));
                console.log(analytics);
                return;
            }
            toast.error(response.data.message);
        } catch (err) {
            Swal.close();
            toast.error("Failed to fetch analytics data");
            console.error("Error fetching analytics data:", err);
        }
    };
    return (
        <AnalyticsSection
            numberOfOrders={analytics.numberOfOrders}
            numberOfProducts={analytics.numberOfProducts}
            numberOfUsers={analytics.numberOfUsers}
            latestUsers={analytics.latestUsers}
            latestOrders={analytics.latestOrders}
            latestProducts={analytics.latestProducts}
        />
    );
};
export default Analytics;
