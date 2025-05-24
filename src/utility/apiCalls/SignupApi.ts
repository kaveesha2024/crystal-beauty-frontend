import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import type { ISignupRequestTypes } from "../types/signup/signup";

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
