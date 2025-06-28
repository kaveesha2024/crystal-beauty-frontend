import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import alert from "sweetalert2";

const GoogleSignUpApi = createAsyncThunk("user/googleSignUp", async (access_token: string) => {
    alert.showLoading();
    const res = await axios.post(`/api/auth/google/?accessToken=${access_token}`);
    if (res.data.status === 200) {
        alert.close();
        return res.data;
    }
    alert.close();
    toast.error(res.data.message);
    return;
});
export default GoogleSignUpApi;
