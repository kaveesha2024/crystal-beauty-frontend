import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import VerifyEmailForm from "./VerifyEmailForm.tsx";
import emailjs from "@emailjs/browser";
import getRandomNumber from "../../../utility/commonFunctions/getRandomNumber/getRandomNumber.ts";
import toast from "react-hot-toast";

const VerifyEmail: React.FC = () => {
    const {
        isVerified,
        email: currentEmail,
        firstName,
    } = useSelector((state: RootState) => state.authentication);
    const [email, setEmail] = useState<string>(currentEmail);
    const [message, setMessage] = useState<string>("");
    const [otp, setOtp] = useState<number>(0);
    const handleInputField = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setEmail(value);
    };
    const sendOtp = async () => {
        setOtp(Number(getRandomNumber(6)));
        const res = await emailjs.send(
            "service_3zgefe2",
            "template_j0zm26u",
            {
                firstName,
                otp,
                email,
            },
            "elF_g9pOU4aRlz1HA"
        );
        if (res.status !== 200) {
            toast.error("Something went wrong");
        }
        // store otp in the DB
        setMessage("Your verification code sent to your email");
    };
    return (
        <div>
            {isVerified ? (
                <div className="mt-20 h-[60vh]">
                    <div
                        className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800"
                        role="alert"
                    >
                        <span className="font-medium">Success alert!</span> Change a few things up
                        and try submitting again.
                    </div>
                </div>
            ) : (
                <VerifyEmailForm
                    sendOtp={sendOtp}
                    handleInputField={handleInputField}
                    message={message}
                    email={email}
                />
            )}
        </div>
    );
};

export default VerifyEmail;
