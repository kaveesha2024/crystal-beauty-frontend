import type { IAuthSliceInitialStateTypes } from "../slices/authSlice";

export interface ICurrentUserInformationTypes {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneNumber: string;
    profilePicture: string | unknown;
}
export interface IProfileSectionPropsTypes {
    user: IAuthSliceInitialStateTypes;
}
