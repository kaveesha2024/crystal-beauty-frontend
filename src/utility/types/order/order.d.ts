import React from "react";

export interface IOrderProductsTypes {
    price: number;
    productId: string;
    productName: string;
    quantity: number;
    __id: number;
}
export interface IAllOrdersTypes {
    address: string;
    createdAt: string;
    customerName: string;
    orderId: string;
    paymentMethod: string;
    phoneNumber: string;
    products: IOrderProductsTypes[];
    status: string;
    totalPrice: number;
    updatedAt: string;
    userId: string;
    __v: number;
    _id: string;
}
export interface IOrderTablePropTypes {
    allOrders: IAllOrdersTypes[];
    handleOrderPopupWindow: (order: IAllOrdersTypes) => void;
}
export interface OrderPopupWindowPropTypes {
    selectedOrderInformation: IAllOrdersTypes | undefined;
    setIsModelOpen: (isModalOpen: boolean) => void;
    deleteOrder: (orderId: string) => void;
    onDeleteOrder?: (orderId: string) => void;
    editOrderStatus: (orderId: string, orderStatus: string) => void;
    onStatusChange?: (orderId: string, status: string) => void;
}
export interface IOrderStatusOptionsTypes {
    value: string;
    color: string;
}
