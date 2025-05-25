export interface IGetAllUsersResponseTypes {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: string;
    isVerified: boolean;
    isBlocked: boolean;
    password: string;
    profilePicture: string;
    updatedAt: string;
    createdAt: string;
    userId: string;
    _id: string;
    __v: number;
}
export interface IUsersTableProps {
    allUsers: IGetAllUsersResponseTypes[];
}
