import React from "react";

export interface IVerifyEmailFormPropTypes {
    sendOtp: () => void;
    handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void;
    message: string;
    email: string;
    isOtpSend: boolean;
    setIsOtpSend: (value: boolean) => void;
    verifyEmailAddress: () => void;
    handleOtpInputData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
