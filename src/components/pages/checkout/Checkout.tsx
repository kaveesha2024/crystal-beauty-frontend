import React, { type ChangeEvent, useEffect, useState } from "react";
import { type NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import CheckoutPage from "./CheckoutPage.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { dispatchType, RootState } from "../../../../store.ts";
import type { IOrderDetailsTypes } from "../../../utility/types/checkout/checkout";
import axios from "axios";
import Swal from "sweetalert2";
import { clearCart } from "../../../utility/slices/CartSlice/CartSlice.ts";
import type { IAuthSliceInitialStateTypes } from "../../../utility/types/slices/authSlice";
import toast from "react-hot-toast";

const Checkout: React.FC = () => {
    const { products: usersProducts } = useLocation().state;
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch<dispatchType>();
    useEffect((): void => {
        collectProductIds();
    }, []);
    const { firstName, phoneNumber, address } = useSelector(
        (state: RootState): IAuthSliceInitialStateTypes => state.authentication
    );
    const [orderDetails, setOrderDetails] = useState<IOrderDetailsTypes>({
        products: [],
        customerName: firstName,
        phoneNumber: phoneNumber,
        address: address,
    });
    const collectProductIds = (): void => {
        const productIds = [];
        for (let i = 0; i < usersProducts.length; i++) {
            productIds.push({
                productId: usersProducts[i].productId,
                quantity: usersProducts[i].quantity,
            });
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
    const placeOrder = async (): Promise<void> => {
        Swal.fire({
            title: "Are You Sure?",
            text: "Do you want to place the order?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#D50B8B",
            cancelButtonColor: "#1e1e19",
            confirmButtonText: "Place Order",
        }).then(async result => {
            let toastId: string | undefined = undefined;
            if (result.isConfirmed) {
                try {
                    toastId = toast.loading("Loading...");
                    const response = await axios.post("/api/place_order", orderDetails);
                    if (response.data.status === 200) {
                        toast.dismiss(toastId);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Order placed successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        dispatch(clearCart());
                        navigate("/products");
                    }
                } catch (err) {
                    toast.dismiss(toastId);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        timer: 1500,
                        text: "Something went wrong!",
                        showConfirmButton: false,
                    });
                }
            }
        });
    };
    return (
        <CheckoutPage
            usersProducts={usersProducts}
            orderDetails={orderDetails}
            handleOrderDetails={handleOrderDetails}
            placeOrder={placeOrder}
        />
    );
};

export default Checkout;
