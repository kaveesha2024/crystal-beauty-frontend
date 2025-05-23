import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ISignupRequestTypes } from "../../components/pages/auth/signup/Signup.tsx";
import toast from "react-hot-toast";

const signupApi = createAsyncThunk(
  "user/signup",
  async (request: ISignupRequestTypes) => {
    const aToast = toast.loading("Signing up...");
    const response = await axios.post("/api/signup", request);
    if (response.data.status === 200) {
      toast.dismiss(aToast);
      return response.data;
    }
    toast.dismiss(aToast);
    toast.error(response.data.message);
  },
);
export default signupApi;
