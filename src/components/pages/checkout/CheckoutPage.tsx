import React, { useEffect } from "react";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
import type { ICartItemTypes } from "../../../utility/types/slices/cartSlice";
import PlaceOrderSection from "./PlaceOrderSection.tsx";
//ICartSliceInitialStateTypes
interface ICheckoutPagePropsTypes {
    checkedProducts: IAllProductsTypes[];
    usersProducts: ICartItemTypes[];
}
const CheckoutPage: React.FC<ICheckoutPagePropsTypes> = ({ usersProducts }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mb-10 flex w-[100%] flex-col px-5">
            <div>
                <h1 className="my-5 font-serif text-3xl font-semibold tracking-wider">
                    You are about to checkout
                    <span className="font-sans"> {usersProducts.length}</span> items
                </h1>
            </div>
            <div className="flex gap-5">
                <div className="h-full max-h-[90vh] w-[calc(100vw-500px)] overflow-y-auto">
                    <div className="border-secondary/20 mb-5 flex w-full justify-between gap-5 border-b-[1px] px-10 pb-3 font-bold">
                        <p className="w-[250px]">Product</p>
                        <p>Unit Price</p>
                        <p>Quantity</p>
                        <p>Total Price</p>
                    </div>
                    {usersProducts.length > 0 &&
                        usersProducts.map((item, index: number) => (
                            <div key={index} className="border-secondary/20 mb-5 w-full py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <img
                                            className="h-[100px] w-[100px] border-2 border-white p-1"
                                            src={item.image}
                                            alt="image"
                                        />
                                        <p className="line-clamp-4 w-[200px] font-semibold tracking-widest">
                                            {item.productName}
                                        </p>
                                    </div>
                                    <div className="ml-3 flex h-full w-[150px] items-center justify-center">
                                        LKR {item.unitPrice.toFixed(2)}
                                    </div>
                                    <div className="ml-3 flex h-full w-[150px] items-center justify-center">
                                        LKR {item.quantity}
                                    </div>
                                    <div className="ml-3 flex h-full w-[150px] items-center justify-center">
                                        LKR {item.quantity * item.unitPrice}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <PlaceOrderSection />
            </div>
        </div>
    );
};

export default CheckoutPage;
