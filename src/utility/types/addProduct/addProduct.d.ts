import React from "react";
import type { IAllProductsTypes } from "../getProducts/getProducts";

export interface IProductTypes {
    productName: string;
    labelledPrice: number;
    price: number;
    stock: number;
    alterNames: string;
    description: string;
    brand: string;
    warranty: string;
    images: string[] | unknown[];
}
export interface IAddProductFormPropTypes {
    handleAddProductInputDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddProductSubmit: (image: FileList | []) => void;
}
export interface IProductTablePropsTypes {
    allProducts: IAllProductsTypes[];
    deleteProduct: (productId: string) => void;
}