import React from "react";
import { FaTruck } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import { Link, type NavigateFunction, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const TotalSection: React.FC = () => {
    const { cart } = useSelector((state: RootState) => state.cart);
    console.log(cart);
    const navigate: NavigateFunction = useNavigate();
    const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    const total = subtotal + 300;
    return (
        <div className="relative mt-10 flex w-[1000px] flex-col items-end font-mono">
            <div className="flex w-[40%] flex-col">
                <div className="border-secondary/20 flex w-full justify-between border-b pb-5">
                    <span className="font-semibold">Subtotal :</span>
                    <span className="text-black/50">LKR {subtotal}/=</span>
                </div>
                <div className="border-secondary/20 mt-5 flex w-full justify-between border-b pb-5">
                    <span className="font-semibold">Shipping Fee :</span>
                    <span className="text-black/50">LKR 300/=</span>
                </div>
                <div className="mt-5 flex w-full justify-between pb-5">
                    <span className="font-semibold">Total :</span>
                    <span className="text-2xl font-bold">LKR {total}/=</span>
                </div>
            </div>
            <div className="mt-10 w-[200px]">
                <div className="flex w-full justify-end pr-2">
                    <FaTruck />
                </div>
                <div className="h-[5px] w-full rounded-full bg-gradient-to-l from-green-600 to-[#A8EB6D]"></div>
                <button
                    onClick={() =>
                        navigate("/checkout", {
                            state: {
                                products: cart,
                            },
                        })
                    }
                    className="bg-secondary text-primary mt-3 h-[50px] w-full cursor-pointer transition duration-200 hover:bg-black"
                >
                    check Out
                </button>
            </div>
            <div className="absolute bottom-0 left-0">
                <Link to="/products" className="font-fancy flex gap-2">
                    <ChevronLeft /> Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default TotalSection;
