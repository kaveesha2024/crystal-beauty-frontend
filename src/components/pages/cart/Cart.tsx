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
            className={`mb-10 flex flex-col items-center px-4 md:px-5 ${cart.length <= 0 ? "min-h-[60vh]" : ""}`}
        >
            <h1 className="mt-6 text-center font-serif text-2xl font-semibold tracking-wider md:mt-10 md:text-4xl md:tracking-widest">
                Your Cart (<span className="font-sans">{cart.length}</span> Items)
            </h1>

            {cart.length > 0 ? (
                <div className="w-full max-w-[1000px]">
                    {/* Mobile: Stacked layout */}
                    <div className="md:hidden">
                        {cart.map((item, index) => (
                            <div key={index} className="border-secondary/20 mt-6 border-b py-4">
                                <div className="flex gap-4">
                                    <img
                                        className="h-24 w-24 rounded-tl-xl rounded-br-xl shadow-lg"
                                        src={item.image}
                                        alt={item.productName}
                                    />
                                    <div className="flex-1">
                                        <h3
                                            className="cursor-pointer font-semibold tracking-wide underline-offset-2 hover:underline"
                                            onClick={() =>
                                                navigate(
                                                    `/products/view_product_details/${item.productId}`
                                                )
                                            }
                                        >
                                            {item.productName}
                                        </h3>
                                        <p className="text-secondary/50 mt-1">
                                            LKR {item.unitPrice.toFixed(2)}
                                        </p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="border-secondary/20 flex h-10 items-center gap-1 rounded-lg border-2 px-2">
                                                <button
                                                    onClick={() =>
                                                        dispatch(decreaseQuantity(item.productId))
                                                    }
                                                    className="hover:text-accent"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={e =>
                                                        dispatch(
                                                            setQuantity({
                                                                productId: item.productId,
                                                                quantity: Number(e.target.value),
                                                            })
                                                        )
                                                    }
                                                    min={1}
                                                    className="w-8 text-center text-sm outline-none"
                                                />
                                                <button
                                                    onClick={() =>
                                                        dispatch(increaseQuantity(item.productId))
                                                    }
                                                    className="hover:text-accent"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                            <div className="font-bold">
                                                LKR {(item.quantity * item.unitPrice).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Remove Item?",
                                                text: "Remove this product from your cart?",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Remove",
                                            }).then(result => {
                                                if (result.isConfirmed) {
                                                    dispatch(deleteFromCart(item.productId));
                                                    Swal.fire("Removed!", "", "success");
                                                }
                                            });
                                        }}
                                        className="self-start"
                                    >
                                        <MdCancel className="text-secondary/40 hover:text-secondary transition" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Tabular layout */}
                    <div className="hidden md:block">
                        {cart.map((item, index) => (
                            <div
                                key={index}
                                className="border-secondary/20 mt-6 flex h-[150px] items-center justify-between border-t border-b md:mt-10 md:h-[200px]"
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 md:gap-5"
                                    onClick={() =>
                                        navigate(`/products/view_product_details/${item.productId}`)
                                    }
                                >
                                    <img
                                        className="h-20 w-20 rounded-tl-xl rounded-br-xl shadow-lg transition hover:scale-105 md:h-[150px] md:w-[150px] md:rounded-tl-2xl md:rounded-br-2xl md:shadow-2xl"
                                        src={item.image}
                                        alt={item.productName}
                                    />
                                    <p className="line-clamp-3 w-[150px] font-semibold tracking-wide underline-offset-2 hover:underline md:w-[200px] md:tracking-widest">
                                        {item.productName}
                                    </p>
                                </div>
                                <div className="text-secondary/50 w-[100px] text-center md:w-[150px]">
                                    LKR {item.unitPrice.toFixed(2)}
                                </div>
                                <div className="flex w-[120px] justify-center md:w-[150px]">
                                    <div className="border-secondary/20 flex h-10 items-center justify-center gap-1 rounded-lg border-2 px-2 md:h-[50px]">
                                        <button
                                            onClick={() =>
                                                dispatch(decreaseQuantity(item.productId))
                                            }
                                            className="hover:text-accent"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={e =>
                                                dispatch(
                                                    setQuantity({
                                                        productId: item.productId,
                                                        quantity: Number(e.target.value),
                                                    })
                                                )
                                            }
                                            min={1}
                                            className="w-8 text-center outline-none md:w-12"
                                        />
                                        <button
                                            onClick={() =>
                                                dispatch(increaseQuantity(item.productId))
                                            }
                                            className="hover:text-accent"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex w-[120px] items-center justify-center gap-2 font-bold md:w-[150px] md:gap-4">
                                    LKR {(item.quantity * item.unitPrice).toFixed(2)}
                                    <button
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "Remove this product from your cart?",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Remove",
                                            }).then(result => {
                                                if (result.isConfirmed) {
                                                    dispatch(deleteFromCart(item.productId));
                                                    Swal.fire("Removed!", "", "success");
                                                }
                                            });
                                        }}
                                    >
                                        <MdCancel className="text-secondary/40 hover:text-secondary transition hover:scale-125" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <TotalSection />
                </div>
            ) : (
                <div className="mt-12 text-center md:mt-20">
                    <p className="text-secondary/60 mb-6">Your cart is empty</p>
                    <button
                        className="bg-accent text-primary active:bg-accent/80 flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition hover:opacity-90 md:text-base"
                        onClick={() => navigate("/products")}
                    >
                        <IoIosArrowBack /> Continue Shopping
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
