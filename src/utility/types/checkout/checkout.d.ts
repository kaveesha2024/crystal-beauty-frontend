import type { ICartItemTypes } from "../slices/cartSlice";
import type { ChangeEvent } from "react";

export interface IOrderDetailsTypes {
    products: string[];
    customerName: string;
    phoneNumber: string;
    address: string;
}
export interface ICheckoutPagePropsTypes {
    usersProducts: ICartItemTypes[];
    orderDetails: IOrderDetailsTypes;
    handleOrderDetails: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IPlaceOrderSectionPropTypes {
    orderDetails: IOrderDetailsTypes;
    handleOrderDetails: (event: ChangeEvent<HTMLInputElement>) => void;
}
