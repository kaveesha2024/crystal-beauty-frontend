import React from "react";
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
import TotalSection from "./TotalSection.tsx";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Cart: React.FC = () => {
    const dispatch = useDispatch<dispatchType>();
    const navigate: NavigateFunction = useNavigate();
    const { cart } = useSelector((state: RootState) => state.cart);
    return (
        <div
            className={`mb-10 flex flex-col items-center justify-start px-5 ${cart.length <= 0 && "h-[60vh]"}`}
        >
            <h1 className="mt-10 text-center font-serif text-4xl font-semibold tracking-widest">
                Your Cart (<span className="font-sans">{cart.length}</span> Items)
            </h1>
            {cart.length > 0 &&
                cart.map((item, index: number) => (
                    <div
                        key={index}
                        className="border-secondary/20 mt-10 flex h-[200px] w-full max-w-[1000px] items-center justify-between border-t-[1px] border-b-[1px]"
                    >
                        <div
                            className="flex cursor-pointer items-center gap-5"
                            onClick={() =>
                                navigate(`/products/view_product_details/${item.productId}`)
                            }
                        >
                            <img
                                className="h-[150px] w-[150px] rounded-tl-2xl rounded-br-2xl shadow-2xl transition duration-150 hover:scale-105"
                                src={item.image}
                                alt="image"
                            />
                            <p className="line-clamp-5 w-[200px] font-semibold tracking-widest underline-offset-2 hover:underline">
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
            {cart.length > 0 ? (
                <TotalSection />
            ) : (
                <button
                    className="bg-accent text-primary justify active:bg-secondary mt-20 flex cursor-pointer items-center gap-3 rounded-md p-3"
                    type="button"
                    onClick={() => navigate("/products")}
                >
                    <IoIosArrowBack className="text-lg" /> Continue to Shopping
                </button>
            )}
        </div>
    );
};

export default Cart;
