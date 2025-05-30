import React from "react";

export interface IUpdatedProductDetailsTypes {
    productName: string;
    labelledPrice: number;
    price: number;
    stock: number;
    alterNames: string;
    description: string;
    brand: string;
    warranty: string;
    images: string[] | unknown[];
    isAvailable: boolean;
}
export interface IUpdateProductFormPropTypes {
    updatedProductDetails: IUpdatedProductDetailsTypes;
    handleUpdateProductInputFieldsDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpdateProductSelectFieldsDetails: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleUpdateFormSubmit: (image: FileList | []) => void;
}
