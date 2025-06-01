export interface ICartItemTypes {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    image: string;
}
export interface ICartSliceInitialStateTypes {
    cart: ICartItemTypes[];
}
