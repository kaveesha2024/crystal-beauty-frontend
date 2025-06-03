import type { ICartSliceInitialStateTypes } from "../../../types/slices/cartSlice";

const clearCartAction = () => {
    return (state: ICartSliceInitialStateTypes) => {
        state.cart = [];
    };
};
export default clearCartAction;
