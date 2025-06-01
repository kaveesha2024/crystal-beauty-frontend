import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartSliceInitialStateTypes } from "../types/slices/cartSlice";
import type { IAllProductsTypes } from "../types/getProducts/getProducts";

const initialState: ICartSliceInitialStateTypes = {
    cart: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (
            state: ICartSliceInitialStateTypes,
            action: PayloadAction<IAllProductsTypes>
        ): void => {
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
                });
                return;
            }
            state.cart[itemIndex].quantity += 1;
            state.cart[itemIndex].totalPrice += payload.price;
        },
        deleteFromCart: (
            state: ICartSliceInitialStateTypes,
            action: PayloadAction<string>
        ): void => {
            const { payload } = action;
            const itemIndex = state.cart.findIndex(item => item.productId === payload);
            if (itemIndex === -1) {
                return;
            }
            state.cart.splice(itemIndex, 1);
        },
        increaseQuantity: (
            state: ICartSliceInitialStateTypes,
            action: PayloadAction<string>
        ): void => {
            const { payload } = action;
            const itemIndex = state.cart.findIndex(item => item.productId === payload);
            if (itemIndex === -1) {
                return;
            }
            state.cart[itemIndex].quantity += 1;
        },
        decreaseQuantity: (
            state: ICartSliceInitialStateTypes,
            action: PayloadAction<string>
        ): void => {
            const { payload } = action;
            const itemIndex = state.cart.findIndex(item => item.productId === payload);
            if (itemIndex === -1) {
                return;
            }
            state.cart[itemIndex].quantity -= 1;
        },
    },
});
export default cartSlice.reducer;
export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
