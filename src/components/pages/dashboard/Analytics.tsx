import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";

const Analytics: React.FC = () => {
    const { firstName, profilePicture } = useSelector((state: RootState) => state.authentication);
    console.log(profilePicture);
    return (
        <div className="mb-5 h-full w-full px-5 pt-5">
            <div className="flex w-full items-center justify-between">
                <h2>Analytics</h2>
                <div className="flex items-center gap-2" onClick={() => {}}>
                    <img
                        src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg"
                        alt="image"
                        className="h-12 w-12 rounded-full"
                    />
                    <p>{firstName}</p>
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
