import React, { useState } from "react";
import type { ICurrentUserInformationTypes } from "../../../utility/types/updateUser/updateUser";

interface UpdateUserFormPropTypes {
    currentUserInformation: ICurrentUserInformationTypes;
    handleUpdateUserFormInputDetails: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    handleUserUpdateFormSubmit: (image: File | null) => void;
}
const UpdateUserForm: React.FC<UpdateUserFormPropTypes> = ({
    currentUserInformation,
    handleUpdateUserFormInputDetails,
    handleUserUpdateFormSubmit,
}) => {
    const [image, setImage] = useState<File | null>(null);
    const handleImageField = (event: React.ChangeEvent<HTMLInputElement | null>) => {
        const files: FileList | null = event.target.files;
        if (!files || files.length === 0) {
            setImage(null);
            return;
        }
        setImage(files[0]);
    };
    return (
        <div>
            <form>
                <div className="flex gap-5">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        onChange={handleUpdateUserFormInputDetails}
                        defaultValue={currentUserInformation.firstName}
                    />
                </div>
                <div className="flex gap-5">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        name="lastName"
                        id="lastName"
                        type="text"
                        onChange={handleUpdateUserFormInputDetails}
                        defaultValue={currentUserInformation.lastName}
                    />
                </div>
                <div className="flex gap-5">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        onChange={handleUpdateUserFormInputDetails}
                        defaultValue={currentUserInformation.email}
                    />
                </div>
                <div className="flex gap-5">
                    <label htmlFor="address">Home Address</label>
                    <input
                        name="address"
                        id="address"
                        onChange={handleUpdateUserFormInputDetails}
                        type="text"
                        defaultValue={currentUserInformation.address}
                    />
                </div>
                <div className="flex gap-5">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        name="phoneNumber"
                        id="phoneNumber"
                        onChange={handleUpdateUserFormInputDetails}
                        type="text"
                        defaultValue={currentUserInformation.phoneNumber}
                    />
                </div>
                <div className="flex gap-5">
                    <label htmlFor="picture">Profile Picture</label>
                    <input onChange={handleImageField} name="picture" id="picture" type="file" />
                </div>
                <div className="flex gap-5">
                    <label htmlFor="role">Role</label>
                    <select
                        defaultValue={currentUserInformation.role}
                        onChange={handleUpdateUserFormInputDetails}
                        name="role"
                        id="role"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label htmlFor="isVerified">Verification Status</label>
                    <select
                        defaultValue={currentUserInformation.isVerified.toString()}
                        name="isVerified"
                        id="isVerified"
                        onChange={handleUpdateUserFormInputDetails}
                    >
                        <option value="true">Verified</option>
                        <option value="false">Non Verified</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label htmlFor="isBlocked">Status</label>
                    <select
                        defaultValue={currentUserInformation.isBlocked.toString()}
                        name="isBlocked"
                        id="isBlocked"
                        onChange={handleUpdateUserFormInputDetails}
                    >
                        <option value="true">Block</option>
                        <option value="false">Un Block</option>
                    </select>
                </div>
                <button
                    type={"button"}
                    onClick={() => {
                        handleUserUpdateFormSubmit(image);
                    }}
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateUserForm;
