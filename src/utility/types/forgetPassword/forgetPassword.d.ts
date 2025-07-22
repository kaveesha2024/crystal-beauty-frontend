import React from "react";

export interface IForgetPasswordInputDetailsTypes {
    otp: string;
    newPassword: string;
    confirmNewPassword: string;
}
export interface IForgetPasswordSection {
    checkEmailAlreadySignUp: (event: React.FormEvent<HTMLFormElement>) => void;
    handleEmailField: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isOtpSend: boolean;
    handleForgetPasswordInputDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isForgetPasswordInputDetailsNull: () => boolean;
    resetPassword: () => void;
    message: string;
}
