import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import { useNavigate } from "react-router-dom";

const Analytics: React.FC = () => {
    const navigate = useNavigate();
    const { profilePicture, userId } = useSelector((state: RootState) => state.authentication);
    return (
        <div className="mb-5 h-full w-full px-5 pt-5">
            <div className="flex w-full items-center justify-between">
                <h2>Analytics</h2>
                <div
                    className="hover:text-accent flex cursor-pointer items-center gap-2 transition duration-100 hover:scale-95"
                    onClick={() => {
                        navigate(`/profile/${userId}`);
                    }}
                >
                    <p>Profile</p>
                    <img src={profilePicture} alt="image" className="h-12 w-12 rounded-full" />
                </div>
            </div>
            <div>
                <h3>Latest added 3 products</h3>
            </div>
            <div>Latest 5 Orders</div>
        </div>
    );
};
export default Analytics;
