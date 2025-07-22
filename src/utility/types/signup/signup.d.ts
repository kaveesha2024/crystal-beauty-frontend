import React from "react";

export interface ISignupInputDetailsTypes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    address: string;
    otp: string;
}
export interface ISignupRequestTypes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
    otp: string;
}
export interface SignupFormProps {
    handleSignupInputFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleSendOtp: () => void;
}
