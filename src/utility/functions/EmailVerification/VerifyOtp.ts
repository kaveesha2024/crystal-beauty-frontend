import toast from "react-hot-toast";
import axios from "axios";
import { verifyEmail } from "../../slices/AuthSlice.ts";
import type { Dispatch } from "react";
import type { dispatchType } from "../../../../store.ts";

const verifyOtp = async (inputOtp: number, email: string, dispatch: Dispatch<dispatchType>) => {
    if (isNaN(Number(inputOtp)) && inputOtp.toString().length > 6) {
        toast.error("Please enter a valid number");
        return;
    }
    try {
        const isOtpCorrect = await axios.post("/api/auth/verify", {
            email,
            otp: inputOtp,
        });
        console.log(isOtpCorrect);
        if (isOtpCorrect.data.status === 200) {
            // @ts-ignore
            dispatch(verifyEmail());
            toast.success(isOtpCorrect.data.message);
        }
        toast.error(isOtpCorrect.data.message);
    } catch (err) {
        toast.error("Something went wrong");
    }
};
export default verifyOtp;
