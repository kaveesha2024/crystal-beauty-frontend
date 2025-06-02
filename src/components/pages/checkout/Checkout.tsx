import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutPage from "./CheckoutPage.tsx";

const Checkout: React.FC = () => {
    const { products: usersProducts } = useLocation().state;

    return <CheckoutPage usersProducts={usersProducts} />;
};

export default Checkout;
