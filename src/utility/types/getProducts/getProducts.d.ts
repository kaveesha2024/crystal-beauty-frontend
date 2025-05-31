export interface IAllProductsTypes {
    __id: string;
    productId: string;
    productName: string;
    labelledPrice: number;
    price: number;
    stock: number;
    discount: number;
    alterNames: string[];
    description: string;
    brand: string;
    warranty: string;
    images: string[];
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface IProductCardPropsTypes {
    price: number;
    labelledPrice: number;
    discount: number;
    brand: string;
    productName: string;
    description: string;
    image: string;
}
