import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store.ts";
import toast from "react-hot-toast";
import { Hero } from "./components/hero/Hero.tsx";
import HomeSection from "./components/pages/home/HomeSection.tsx";

const App: React.FC = () => {
    const authState = useSelector((state: RootState) => state.authentication);
    if (authState.isAuthenticated && !authState.isVerified) {
        toast.error("You haven't verified your email address yet.");
    }
    return (
        <div>
            <Hero />
            <HomeSection />
        </div>
    );
};

export default App;
