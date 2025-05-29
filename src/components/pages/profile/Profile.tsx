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

const Profile: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch<dispatchType>();
    const user: IAuthSliceInitialStateTypes = useSelector(
        (state: RootState) => state.authentication
    );
    const userId: string | undefined = useParams().userId;
    return (
        <div className="w-full px-5">
            <p>
                Hello {user.firstName} {user.lastName}!
            </p>
            <div className="flex justify-center gap-5">
                <Link
                    className="hover:text-accent transition duration-100 hover:scale-95"
                    to={`/profile/${userId}`}
                >
                    Profile
                </Link>
                <Link
                    className="hover:text-accent transition duration-100 hover:scale-95"
                    to={`/profile/${userId}/manage-profile`}
                >
                    Manage Profile
                </Link>
                <Link
                    className="hover:text-accent transition duration-100 hover:scale-95"
                    to={`/profile/${userId}/verify_email`}
                >
                    Verify Email Address
                </Link>
                <button
                    className="hover:text-accent transition duration-100 hover:scale-95"
                    onClick={() => {
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
                    }}
                >
                    Logout
                </button>
            </div>
            <div>
                <Routes>
                    <Route path="manage-profile" element={<ManageProfile />} />
                    <Route path="verify_email" element={<VerifyEmail />} />
                </Routes>
            </div>
        </div>
    );
};

export default Profile;
