import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { dispatchType, RootState } from "../../../../store.ts";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import {
    deleteFromCart,
    decreaseQuantity,
    increaseQuantity,
    setQuantity,
} from "../../../utility/slices/CartSlice/CartSlice.ts";
import { Minus, Plus } from "lucide-react";

const Cart: React.FC = () => {
    const dispatch = useDispatch<dispatchType>();
    const { cart } = useSelector((state: RootState) => state.cart);
    return (
        <div className="mb-10 flex flex-col items-center justify-start px-5">
            <h1 className="mt-10 text-center font-serif text-4xl font-semibold tracking-widest">
                Your Cart (<span className="font-sans">{cart.length}</span> Items)
            </h1>
            {cart.length > 0 &&
                cart.map((item, index: number) => (
                    <div
                        key={index}
                        className="border-secondary/20 mt-10 flex h-[200px] w-full max-w-[1000px] items-center justify-between border-t-[1px] border-b-[1px]"
                    >
                        <div className="flex items-center gap-5">
                            <img
                                className="h-[150px] w-[150px] rounded-tl-2xl rounded-br-2xl shadow-2xl"
                                src={item.image}
                                alt="image"
                            />
                            <p className="line-clamp-5 w-[200px] font-semibold tracking-widest">
                                {item.productName}
                            </p>
                        </div>
                        <div className="text-secondary/50 ml-3 flex h-full w-[150px] items-center justify-center">
                            LKR {item.unitPrice.toFixed(2)}
                        </div>
                        <div className="ml-3 flex h-full w-[150px] items-center justify-center">
                            <div className="border-secondary/20 flex h-[50px] justify-center gap-1 rounded-lg border-2 p-2">
                                <button
                                    onClick={() => dispatch(decreaseQuantity(item.productId))}
                                    className="hover:text-accent cursor-pointer"
                                >
                                    <Minus />
                                </button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        dispatch(
                                            setQuantity({
                                                productId: item.productId,
                                                quantity: Number(event.target.value),
                                            })
                                        )
                                    }
                                    min={0}
                                    className="w-13 text-center outline-none"
                                />
                                <button
                                    onClick={() => dispatch(increaseQuantity(item.productId))}
                                    className="hover:text-accent cursor-pointer"
                                >
                                    <Plus />
                                </button>
                            </div>
                        </div>
                        <div className="ml-3 flex h-full w-[150px] items-center justify-between font-bold">
                            LKR {(item.quantity * item.unitPrice).toFixed(2)}
                            <button
                                onClick={() => {
                                    Swal.fire({
                                        title: "Are you sure?",
                                        text: "Do you want to remove this product from your cart?",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Yes, Remove it!",
                                    }).then(result => {
                                        if (result.isConfirmed) {
                                            dispatch(deleteFromCart(item.productId));
                                            Swal.fire({
                                                title: "Removed!",
                                                icon: "success",
                                            });
                                        }
                                    });
                                }}
                            >
                                <MdCancel className="text-secondary/40 hover:text-secondary cursor-pointer transition duration-300 hover:scale-200" />
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Cart;
