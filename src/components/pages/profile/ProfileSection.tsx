import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import type { ICartSliceInitialStateTypes } from "../../../utility/types/slices/cartSlice";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import type { IProfileSectionPropsTypes } from "../../../utility/types/profile/profile";

const ProfileSection: React.FC<IProfileSectionPropsTypes> = ({ user }) => {
    const navigate: NavigateFunction = useNavigate();
    const cart: ICartSliceInitialStateTypes = useSelector((state: RootState) => state.cart);

    return (
        <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 md:p-8">
            <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
                {/* Profile Header */}
                <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
                    <img
                        src={user.profilePicture || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            {user.firstName} {user.lastName}
                            {user.isVerified && (
                                <span className="ml-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 sm:text-sm">
                                    Verified
                                </span>
                            )}
                        </h1>
                        <p className="text-sm text-gray-600 sm:text-base">{user.role}</p>
                        <p className="text-xs text-gray-500 sm:text-sm">ID: {user.userId}</p>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-3 sm:space-y-4">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 sm:text-base">
                                Contact Information
                            </h3>
                            <p className="text-sm text-gray-600 sm:text-base">
                                Email: {user.email}
                            </p>
                            <p className="text-sm text-gray-600 sm:text-base">
                                Phone: {user.phoneNumber}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 sm:text-base">
                                Address
                            </h3>
                            <p className="text-sm text-gray-600 sm:text-base">{user.address}</p>
                        </div>
                    </div>

                    {/* Right Column - Quick Actions */}
                    <div className="space-y-3 sm:space-y-4">
                        <div
                            onClick={() => navigate("/cart")}
                            className="cursor-pointer rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 active:bg-gray-200 sm:p-4"
                        >
                            <h3 className="text-sm font-semibold text-gray-700 sm:text-base">
                                Shopping Cart
                            </h3>
                            <p className="text-xl font-bold text-blue-600 sm:text-2xl">
                                {cart.cart.length > 0 ? cart.cart.length : 0} Items
                            </p>
                        </div>

                        <div
                            onClick={() => navigate("/my_orders")}
                            className="cursor-pointer rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 active:bg-gray-200 sm:p-4"
                        >
                            {/*<h3 className="text-sm font-semibold text-gray-700 sm:text-base">*/}
                            {/*    Orders*/}
                            {/*</h3>*/}
                            <p className="text-xl font-bold text-blue-600 sm:text-2xl">My Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
