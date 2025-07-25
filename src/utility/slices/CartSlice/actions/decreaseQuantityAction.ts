import type { ICartSliceInitialStateTypes } from "../../../types/slices/cartSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

const decreaseQuantityAction = () => {
    return (state: ICartSliceInitialStateTypes, action: PayloadAction<string>): void => {
        const { payload } = action;
        const itemIndex = state.cart.findIndex(item => item.productId === payload);
        if (itemIndex === -1) {
            return;
        }
        state.cart[itemIndex].quantity -= 1;
        if (state.cart[itemIndex].quantity === 0) {
            state.cart[itemIndex].quantity = 1;
            return;
        }
        state.cart[itemIndex].totalPrice =
            state.cart[itemIndex].quantity * state.cart[itemIndex].unitPrice;
    };
};
export default decreaseQuantityAction;
