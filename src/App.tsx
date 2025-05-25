import React from "react";
import { Hero } from "./components/hero/Hero.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../store.ts";
import toast from "react-hot-toast";

const App: React.FC = () => {
    const authState = useSelector((state: RootState) => state.authentication);
    if (authState.isAuthenticated && !authState.isVerified) {
        toast.error("You haven't verified your email address yet.");
    }
    return (
        <div>
            <Hero />
        </div>
    );
};

export default App;
