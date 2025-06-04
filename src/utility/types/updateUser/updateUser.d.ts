import React from "react";

export interface ICurrentUserInformationTypes {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    profilePicture: string | unknown;
    isBlocked: boolean;
    isVerified: boolean;
    role: string;
    email: string;
}
export interface UpdateUserFormPropTypes {
    currentUserInformation: ICurrentUserInformationTypes;
    handleUpdateUserFormInputDetails: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    handleUserUpdateFormSubmit: (image: File | null) => void;
}