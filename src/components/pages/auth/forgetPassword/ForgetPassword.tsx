import React, { useState } from "react";
import ForgetPasswordSection from "./ForgetPasswordSection.tsx";
import CheckEmailAlreadySignUpApi from "./CheckEmailAlreadySignUpApi.ts";
import type { IForgetPasswordInputDetailsTypes } from "../../../../utility/types/forgetPassword/forgetPassword";
import Swal from "sweetalert2";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import ResetPasswordEndpointCall from "./ResetPasswordEndpointCall.ts";

const ForgetPassword: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [isOtpSend, setIsOtpSend] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("Please verify your email address first");
    const [forgetPasswordInputDetails, setForgetPasswordInputDetails] =
        useState<IForgetPasswordInputDetailsTypes>({
            otp: "",
            newPassword: "",
            confirmNewPassword: "",
        });
    const isForgetPasswordInputDetailsNull = (): boolean => {
        return (
            forgetPasswordInputDetails.otp === "" ||
            forgetPasswordInputDetails.newPassword === "" ||
            forgetPasswordInputDetails.confirmNewPassword === ""
        );
    };
    const handleEmailField = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };
    const handleForgetPasswordInputDetails = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setForgetPasswordInputDetails(currentState => ({
            ...currentState,
            [name]: value,
        }));
    };
    const checkEmailAlreadySignUp = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        Swal.showLoading();
        const response = await CheckEmailAlreadySignUpApi(email);
        Swal.close();
        if (response !== null) {
            setMessage(response);
            setIsOtpSend(true);
            return;
        }
    };
    const resetPassword = ResetPasswordEndpointCall(forgetPasswordInputDetails, navigate);
    return (
        <ForgetPasswordSection
            checkEmailAlreadySignUp={checkEmailAlreadySignUp}
            handleEmailField={handleEmailField}
            isOtpSend={isOtpSend}
            handleForgetPasswordInputDetails={handleForgetPasswordInputDetails}
            isForgetPasswordInputDetailsNull={isForgetPasswordInputDetailsNull}
            resetPassword={resetPassword}
            message={message}
        />
    );
};

export default ForgetPassword;
