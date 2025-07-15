import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { dispatchType, RootState } from "../../../../store.ts";
import {
    Link,
    type NavigateFunction,
    Route,
    Routes,
    useNavigate,
    useParams,
} from "react-router-dom";
import ManageProfile from "./ManageProfile.tsx";
import VerifyEmail from "./VerifyEmail.tsx";
import Swal from "sweetalert2";
import { signOut } from "../../../utility/slices/AuthSlice.ts";
import type { IAuthSliceInitialStateTypes } from "../../../utility/types/slices/authSlice";
import ProfileSection from "./ProfileSection.tsx";

const Profile: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch<dispatchType>();
    const user: IAuthSliceInitialStateTypes = useSelector(
        (state: RootState) => state.authentication
    );
    const userId: string | undefined = useParams().userId;

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to sign out of your account?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign Out",
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(signOut());
                navigate("/");
            }
        });
    };

    return (
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
            {/* Greeting */}
            <h1 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">
                Hello {user.firstName} {user.lastName}!
            </h1>

            {/* Navigation Tabs */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 md:gap-8">
                <Link
                    to={`/profile/${userId}`}
                    className="hover:text-accent focus:ring-accent focus:ring-opacity-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 focus:ring-2 focus:outline-none sm:text-base"
                >
                    Profile
                </Link>
                <Link
                    to={`/profile/${userId}/manage-profile`}
                    className="hover:text-accent focus:ring-accent focus:ring-opacity-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 focus:ring-2 focus:outline-none sm:text-base"
                >
                    Manage Profile
                </Link>
                <Link
                    to={`/profile/${userId}/verify_email`}
                    className="hover:text-accent focus:ring-accent focus:ring-opacity-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 focus:ring-2 focus:outline-none sm:text-base"
                >
                    Verify Email
                </Link>
                <button
                    onClick={handleLogout}
                    className="focus:ring-opacity-50 rounded-lg px-4 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-50 hover:text-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none sm:text-base"
                >
                    Logout
                </button>
            </div>

            {/* Content Area */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <Routes>
                    <Route path="manage-profile" element={<ManageProfile />} />
                    <Route path="/" element={<ProfileSection user={user} />} />
                    <Route path="verify_email" element={<VerifyEmail />} />
                </Routes>
            </div>
        </div>
    );
};

export default Profile;
