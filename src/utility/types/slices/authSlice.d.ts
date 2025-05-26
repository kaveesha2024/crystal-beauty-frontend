export interface IAuthSliceInitialStateTypes {
    token: string;
    firstName: string;
    lastName: string;
    isLoading: boolean;
    isAuthenticated: boolean;
    email: string;
    phoneNumber: string;
    address: string;
    profilePicture: string;
    role: string;
    isVerified: boolean;
    isBlocked: boolean;
}
export interface IAuthSlicePayloadTypes {
    token: string;
    status: number;
    user: IAuthSliceInitialStateTypes;
}
