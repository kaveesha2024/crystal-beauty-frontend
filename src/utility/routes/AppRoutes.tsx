import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../../App.tsx";
import Signup from "../../components/pages/auth/signup/Signup.tsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Footer } from "../../components/footer/Footer.tsx";
import { Header } from "../../components/header/Header.tsx";
import SignIn from "../../components/pages/auth/signin/SignIn.tsx";
import NavBar from "../../components/navBar/NavBar.tsx";
import { useSelector } from "react-redux";
import { type RootState, store } from "../../../store.ts";
import Dashboard from "../../components/pages/dashboard/Dashboard.tsx";
import Profile from "../../components/pages/profile/Profile.tsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use(
    function (config) {
        let token = store.getState().authentication.token;
        if (!token || token === "") {
            return config;
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
const AppRoutes: React.FC = () => {
    const { role, isAuthenticated } = useSelector((state: RootState) => state.authentication);
    return (
        <div>
            <Toaster />
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/*"
                    element={
                        <div className="flex h-screen w-full items-center justify-center">
                            <p>404</p>
                        </div>
                    }
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/dashboard/*"
                    element={role === "admin" ? <Dashboard /> : <Navigate to="/" />}
                />
                <Route
                    path={"/profile/:userId/*"}
                    element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />}
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default AppRoutes;
