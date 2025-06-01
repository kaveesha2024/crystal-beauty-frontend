import type { ICartSliceInitialStateTypes } from "../../../types/slices/cartSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

const deleteFromCartAction = () => {
    return (state: ICartSliceInitialStateTypes, action: PayloadAction<string>): void => {
        const { payload } = action;
        const itemIndex = state.cart.findIndex(item => item.productId === payload);
        if (itemIndex === -1) {
            return;
        }
        state.cart.splice(itemIndex, 1);
    };
};
export default deleteFromCartAction;
