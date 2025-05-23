import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../../App.tsx";
import Signup from "../../components/pages/auth/signup/Signup.tsx";

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/*<Footer />*/}
    </div>
  );
};

export default AppRoutes;
