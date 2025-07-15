import React from "react";
import { FaTruck } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import { Link, type NavigateFunction, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const TotalSection: React.FC = () => {
    const { cart } = useSelector((state: RootState) => state.cart);
    const navigate: NavigateFunction = useNavigate();
    const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    const total = subtotal + 300;

    return (
        <div className="mt-6 w-full max-w-[1000px] px-4 md:mt-10 md:px-0">
            {/* Summary Section */}
            <div className="flex w-full flex-col items-end">
                <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%]">
                    <div className="border-secondary/20 flex justify-between border-b py-3 md:py-5">
                        <span className="text-sm font-semibold md:text-base">Subtotal:</span>
                        <span className="text-black/50">LKR {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="border-secondary/20 flex justify-between border-b py-3 md:py-5">
                        <span className="text-sm font-semibold md:text-base">Shipping Fee:</span>
                        <span className="text-black/50">LKR 300.00</span>
                    </div>
                    <div className="flex justify-between py-3 md:py-5">
                        <span className="text-sm font-semibold md:text-base">Total:</span>
                        <span className="text-xl font-bold md:text-2xl">
                            LKR {total.toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Checkout Section */}
                <div className="mt-6 w-full md:mt-10 md:w-[250px]">
                    <div className="flex justify-end pr-2">
                        <FaTruck className="text-sm md:text-base" />
                    </div>
                    <div className="h-[3px] w-full rounded-full bg-gradient-to-l from-green-600 to-[#A8EB6D] md:h-[5px]"></div>
                    <button
                        onClick={() => navigate("/checkout", { state: { products: cart } })}
                        className="bg-secondary text-primary mt-3 h-[40px] w-full cursor-pointer text-sm transition duration-200 hover:bg-black hover:text-white md:h-[50px] md:text-base"
                    >
                        Check Out
                    </button>
                </div>
            </div>

            {/* Continue Shopping Link */}
            <div className="mt-6 w-full md:mt-8">
                <Link
                    to="/products"
                    className="font-fancy flex items-center gap-1 text-sm hover:underline md:text-base"
                >
                    <ChevronLeft size={18} /> Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default TotalSection;
