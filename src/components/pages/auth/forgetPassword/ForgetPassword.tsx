import React, { useState } from "react";
import ForgetPasswordSection from "./ForgetPasswordSection.tsx";
import CheckEmailAlreadySignUpApi from "./CheckEmailAlreadySignUpApi.ts";

const ForgetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [isOtpSend, setIsOtpSend] = useState<boolean>(true);
    const handleEmailField = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };
    const checkEmailAlreadySignUp = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        const response = await CheckEmailAlreadySignUpApi(email);
        if (response !== null) {
            setIsOtpSend(true);
            console.log("work");
            return;
        }
    };
    return (
        <ForgetPasswordSection
            checkEmailAlreadySignUp={checkEmailAlreadySignUp}
            handleEmailField={handleEmailField}
            isOtpSend={isOtpSend}
        />
    );
};

export default ForgetPassword;
