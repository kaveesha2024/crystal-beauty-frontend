import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../../App.tsx";
import Signup from "../../components/pages/auth/signup/Signup.tsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
// import { Footer } from "../../components/footer/Footer.tsx";
import { Header } from "../../components/header/Header.tsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    if (!token) {
      token = "";
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
const AppRoutes: React.FC = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/*<Footer />*/}
    </div>
  );
};

export default AppRoutes;
