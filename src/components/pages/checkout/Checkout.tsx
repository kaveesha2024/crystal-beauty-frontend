import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CheckoutPage from "./CheckoutPage.tsx";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Checkout: React.FC = () => {
    const { products: usersProducts } = useLocation().state;
    const [checkedProducts, setCheckedProducts] = useState<IAllProductsTypes[]>([]);
    useEffect(() => {
        getProductsDetailsByUsersProducts();
    }, []);

    const getProductsDetailsByUsersProducts = async () => {
        const validProducts: IAllProductsTypes[] = [];
        Swal.showLoading();
        // const toastId = toast.loading("Checking products details, Please wait...");
        for (let i = 0; i < usersProducts.length; i++) {
            try {
                const response = await axios.get(
                    "/api/get_product/by_id/?productId=" + usersProducts[i].productId
                );
                if (response.data.status === 200) {
                    validProducts.push(response.data.message);
                }
            } catch (error) {
                return;
            }
        }
        setCheckedProducts(validProducts);
        Swal.close();
        // toast.dismiss(toastId);
    };
    return <CheckoutPage checkedProducts={checkedProducts} usersProducts={usersProducts} />;
};

export default Checkout;
