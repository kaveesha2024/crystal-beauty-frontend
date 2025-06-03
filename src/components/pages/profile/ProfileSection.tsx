import React from "react";
import type { IAuthSliceInitialStateTypes } from "../../../utility/types/slices/authSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import type { ICartSliceInitialStateTypes } from "../../../utility/types/slices/cartSlice";
import { type NavigateFunction, useNavigate } from "react-router-dom";

interface IProfileSectionPropsTypes {
    user: IAuthSliceInitialStateTypes;
}

const ProfileSection: React.FC<IProfileSectionPropsTypes> = ({ user }) => {
    const navigate: NavigateFunction = useNavigate();
    const cart: ICartSliceInitialStateTypes = useSelector((state: RootState) => state.cart);
    return (
        <div className="mx-auto max-w-4xl p-8">
            <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-8 flex items-center gap-8">
                    <img
                        src={user.profilePicture || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="h-32 w-32 rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">
                            {user.firstName} {user.lastName}
                            {user.isVerified && (
                                <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">
                                    Verified
                                </span>
                            )}
                        </h1>
                        <p className="text-gray-600">{user.role}</p>
                        <p className="text-gray-600">ID: {user.userId}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-700">Contact Information</h3>
                            <p className="text-gray-600">Email: {user.email}</p>
                            <p className="text-gray-600">Phone: {user.phoneNumber}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700">Address</h3>
                            <p className="text-gray-600">{user.address}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div
                            onClick={(): void | Promise<void> => navigate("/cart")}
                            className="cursor-pointer rounded-lg bg-gray-50 p-4"
                        >
                            <h3 className="font-semibold text-gray-700">Shopping Cart</h3>
                            <p className="text-2xl font-bold text-blue-600">
                                {cart.cart.length > 0 ? cart.cart.length : 0} Items
                            </p>
                        </div>

                        <div
                            onClick={(): void | Promise<void> => navigate("/my_orders")}
                            className="cursor-pointer rounded-lg bg-gray-50 p-4"
                        >
                            <h3 className="font-semibold text-gray-700">Orders</h3>
                            <p className="text-2xl font-bold text-blue-600">0 Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
