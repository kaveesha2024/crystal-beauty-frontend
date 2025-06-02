import React, { type ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckoutPage from "./CheckoutPage.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import type { IOrderDetailsTypes } from "../../../utility/types/checkout/checkout";

const Checkout: React.FC = () => {
    const { products: usersProducts } = useLocation().state;
    useEffect(() => {
        collectProductIds();
    }, []);
    const { firstName, phoneNumber, address } = useSelector(
        (state: RootState) => state.authentication
    );
    const [orderDetails, setOrderDetails] = useState<IOrderDetailsTypes>({
        products: [],
        customerName: firstName,
        phoneNumber: phoneNumber,
        address: address,
    });
    const collectProductIds = () => {
        const productIds = [];
        for (let i = 0; i < usersProducts.length; i++) {
            productIds.push(usersProducts[i].productId);
        }
        orderDetails.products = productIds;
    };
    const handleOrderDetails = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setOrderDetails({
            ...orderDetails,
            [name]: value,
        });
    };
    console.log(orderDetails);
    return (
        <CheckoutPage
            usersProducts={usersProducts}
            orderDetails={orderDetails}
            handleOrderDetails={handleOrderDetails}
        />
    );
};

export default Checkout;
