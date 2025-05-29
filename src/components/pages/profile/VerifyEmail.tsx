import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { dispatchType, RootState } from "../../../../store.ts";
import VerifyEmailForm from "./VerifyEmailForm.tsx";
import getRandomNumber from "../../../utility/commonFunctions/getRandomNumber/getRandomNumber.ts";
import requestOtp from "../../../utility/functions/EmailVerification/RequestOtp.ts";
import verifyOtp from "../../../utility/functions/EmailVerification/VerifyOtp.ts";

const VerifyEmail: React.FC = () => {
    const dispatch = useDispatch<dispatchType>();
    const {
        isVerified,
        email: currentEmail,
        firstName,
    } = useSelector((state: RootState) => state.authentication);
    const [email, setEmail] = useState<string>(currentEmail);
    const [message, setMessage] = useState<string>("");
    const [otp, setOtp] = useState<number>(0);
    const [isOtpSend, setIsOtpSend] = useState(false);
    const [inputOtp, setInputOtp] = useState(0);
    useEffect(() => {
        setOtp(Number(getRandomNumber(6)));
    }, []);
    useEffect(() => {
        setTimeout(
            () => {
                setIsOtpSend(false);
            },
            5 * 60 * 1000
        );
    }, [isOtpSend]);
    const handleInputField = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setEmail(value);
    };
    const sendOtp = async () => {
        await requestOtp(firstName, otp, email, setIsOtpSend, setMessage);
    };
    const handleOtpInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputOtp(Number(event.target.value));
    };
    const verifyEmailAddress = async () => {
        await verifyOtp(inputOtp, email, dispatch);
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
                    isOtpSend={isOtpSend}
                    setIsOtpSend={setIsOtpSend}
                    verifyEmailAddress={verifyEmailAddress}
                    handleOtpInputData={handleOtpInputData}
                />
            )}
        </div>
    );
};

export default VerifyEmail;
