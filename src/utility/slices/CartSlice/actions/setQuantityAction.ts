import type {
    ICartSliceInitialStateTypes,
    ISetQuantityPayloadTypes,
} from "../../../types/slices/cartSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

const setQuantityAction = () => {
    return (
        state: ICartSliceInitialStateTypes,
        action: PayloadAction<ISetQuantityPayloadTypes>
    ): void => {
        const { payload } = action;
        const itemIndex = state.cart.findIndex(item => item.productId === payload.productId);
        if (itemIndex === -1) {
            return;
        }
        state.cart[itemIndex].quantity = payload.quantity;
        if (state.cart[itemIndex].quantity === 0) {
            state.cart[itemIndex].quantity = 1;
        }
        if (state.cart[itemIndex].quantity > state.cart[itemIndex].stock) {
            state.cart[itemIndex].quantity = state.cart[itemIndex].stock;
        }
        state.cart[itemIndex].totalPrice = payload.quantity * state.cart[itemIndex].unitPrice;
    };
};
export default setQuantityAction;
