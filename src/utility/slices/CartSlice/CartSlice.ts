import { createSlice } from "@reduxjs/toolkit";
import type { ICartSliceInitialStateTypes } from "../../types/slices/cartSlice";
import { addToCartAction } from "./actions/addToCartAction.ts";
import setQuantityAction from "./actions/setQuantityAction.ts";
import increaseQuantityAction from "./actions/increaseQuantityAction.ts";
import deleteFromCartAction from "./actions/deleteFromCartAction.ts";
import decreaseQuantityAction from "./actions/decreaseQuantityAction.ts";
import clearCartAction from "./actions/clearCartAction.ts";

const initialState: ICartSliceInitialStateTypes = {
    cart: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: addToCartAction(),
        deleteFromCart: deleteFromCartAction(),
        increaseQuantity: increaseQuantityAction(),
        decreaseQuantity: decreaseQuantityAction(),
        setQuantity: setQuantityAction(),
        clearCart: clearCartAction(),
    },
});
export default cartSlice.reducer;
export const {
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    clearCart,
} = cartSlice.actions;
