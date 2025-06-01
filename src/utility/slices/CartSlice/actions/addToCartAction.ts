import type { ICartSliceInitialStateTypes } from "../../../types/slices/cartSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAllProductsTypes } from "../../../types/getProducts/getProducts";

export const addToCartAction = () => {
    return (state: ICartSliceInitialStateTypes, action: PayloadAction<IAllProductsTypes>): void => {
        const { payload } = action;
        const itemIndex = state.cart.findIndex(item => item.productId === payload.productId);
        if (itemIndex === -1) {
            state.cart.push({
                productId: payload.productId,
                quantity: 1,
                productName: payload.productName,
                unitPrice: payload.price,
                totalPrice: payload.price,
                image: payload.images[0],
                stock: payload.stock,
            });
            return;
        }
        state.cart[itemIndex].quantity += 1;
        state.cart[itemIndex].totalPrice += payload.price;
    };
};
