import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import { Link, Route, Routes, useParams } from "react-router-dom";
import ManageProfile from "./ManageProfile.tsx";

const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.authentication);
    const userId = useParams().userId;
    return (
        <div className="p- w-full px-5">
            <p>
                Hello {user.firstName} {user.lastName}!
            </p>
            <div className="flex justify-center gap-5">
                <Link
                    className="hover:text-accent transition duration-100 hover:scale-95"
                    to={`/profile/${userId}/manage-profile`}
                >
                    Manage Profile
                </Link>
                <Link className="hover:text-accent transition duration-100 hover:scale-95" to={"/"}>
                    Verify Email Address
                </Link>
                <Link className="hover:text-accent transition duration-100 hover:scale-95" to={"/"}>
                    Change Password
                </Link>
                <Link className="hover:text-accent transition duration-100 hover:scale-95" to={"/"}>
                    Logout
                </Link>
            </div>
            <div>
                <Routes>
                    <Route path="manage-profile" element={<ManageProfile />} />
                </Routes>
            </div>
        </div>
    );
};

export default Profile;
