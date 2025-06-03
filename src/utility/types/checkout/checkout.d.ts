import type { ICartItemTypes } from "../slices/cartSlice";
import type { ChangeEvent } from "react";

interface IOrderDetailsTypesProductsTypes {
    productId: string;
    quantity: number;
}
export interface IOrderDetailsTypes {
    products: IOrderDetailsTypesProductsTypes[];
    customerName: string;
    phoneNumber: string;
    address: string;
}
export interface ICheckoutPagePropsTypes {
    usersProducts: ICartItemTypes[];
    orderDetails: IOrderDetailsTypes;
    handleOrderDetails: (event: ChangeEvent<HTMLInputElement>) => void;
    placeOrder: () => void;
}
export interface IPlaceOrderSectionPropTypes {
    orderDetails: IOrderDetailsTypes;
    handleOrderDetails: (event: ChangeEvent<HTMLInputElement>) => void;
    placeOrder: () => void;
}
