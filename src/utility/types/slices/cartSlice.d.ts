export interface ICartItemTypes {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    image: string;
    stock: number;
}
export interface ICartSliceInitialStateTypes {
    cart: ICartItemTypes[];
}
export interface ISetQuantityPayloadTypes {
    productId: string;
    quantity: number;
}
