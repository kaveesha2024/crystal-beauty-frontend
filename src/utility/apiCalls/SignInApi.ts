import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import type { ISignInInputDetailsTypes } from "../types/signIn/signIn";

const SignInApi = createAsyncThunk(
    "user/signIn",
    async (signInInputDetails: ISignInInputDetailsTypes) => {
        const aToast = toast.loading("Signing in...");
        const response = await axios.post("/api/signin", signInInputDetails);
        toast.dismiss(aToast);
        if (response.data.status === 200) {
            return response.data;
        }
        toast.error(response.data.message);
    }
);
export default SignInApi;
