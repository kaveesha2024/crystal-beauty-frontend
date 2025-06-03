import React from "react";
import { FaPaypal, FaTruck } from "react-icons/fa";
import { PiCreditCardFill } from "react-icons/pi";
import type { IPlaceOrderSectionPropTypes } from "../../../utility/types/checkout/checkout";

const PlaceOrderSection: React.FC<IPlaceOrderSectionPropTypes> = ({
    orderDetails,
    handleOrderDetails,
    placeOrder,
}) => {
    return (
        <div className="h-[600px] w-[500px] rounded-sm bg-gray-100 px-5 font-sans transition duration-300 hover:shadow-lg">
            <div className="flex h-full flex-col justify-between gap-5">
                <h2 className="mt-5 text-3xl font-semibold tracking-wide">Payment Info.</h2>

                <form>
                    <div className="flex flex-col gap-2 font-semibold">
                        <p className="text-secondary/50 mb-5 !text-sm">Payment Methods</p>
                        <div className="flex justify-start">
                            <input type="radio" name="payment" />
                            <label className="ml-3 flex items-center gap-2">
                                <FaPaypal /> Paypal{" "}
                                <span className="text-secondary/40">(not available yet)</span>
                            </label>
                        </div>
                        <div className="flex justify-start">
                            <input type="radio" name="payment" />
                            <label className="ml-3 flex items-center gap-2">
                                {" "}
                                <PiCreditCardFill />
                                Credit Card{" "}
                                <span className="text-secondary/40">(not available yet)</span>
                            </label>
                        </div>
                        <div className="flex justify-start">
                            <input type="radio" name="payment" defaultChecked />
                            <label className="ml-3 flex items-center gap-2">
                                <FaTruck /> Cash on Delivery
                            </label>
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="customerName"
                                className="text-secondary/50 !text-sm tracking-widest uppercase"
                            >
                                Customer Name
                            </label>
                            <input
                                type="text"
                                name="customerName"
                                defaultValue={orderDetails.customerName}
                                onChange={handleOrderDetails}
                                className="rounded-xs bg-white p-1 tracking-widest"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="phoneNumber"
                                className="text-secondary/50 !text-sm tracking-widest uppercase"
                            >
                                phone number (+94)
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                defaultValue={orderDetails.phoneNumber}
                                onChange={handleOrderDetails}
                                className="rounded-xs bg-white p-1 tracking-widest"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="address"
                                className="text-secondary/50 !text-sm tracking-widest uppercase"
                            >
                                Customer address
                            </label>
                            <input
                                type="text"
                                name="address"
                                defaultValue={orderDetails.address}
                                onChange={handleOrderDetails}
                                className="rounded-xs bg-white p-1 tracking-widest"
                            />
                        </div>
                    </div>
                </form>
                <div className="mb-4 flex justify-center">
                    <button
                        onClick={placeOrder}
                        className="bg-secondary text-primary w-[90%] cursor-pointer rounded-xs py-2 font-bold tracking-wide uppercase active:bg-black active:text-white"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderSection;
