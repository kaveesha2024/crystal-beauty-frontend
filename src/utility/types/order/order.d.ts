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
    deleteOrder: (orderId: string) => void;
}
