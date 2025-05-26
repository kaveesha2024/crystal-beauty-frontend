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
            <form
                className="mx-auto max-w-3xl space-y-6 rounded-2xl p-8 shadow-xl"
                style={{ backgroundColor: "#FFEDFA" }}
            >
                <h2 className="mb-4 text-3xl font-bold text-[#1e1e19]">Update User Details</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            First Name
                        </label>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            onChange={handleUpdateUserFormInputDetails}
                            defaultValue={currentUserInformation.firstName}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="lastName"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            Last Name
                        </label>
                        <input
                            name="lastName"
                            id="lastName"
                            type="text"
                            onChange={handleUpdateUserFormInputDetails}
                            defaultValue={currentUserInformation.lastName}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1 block font-semibold text-[#1e1e19]">
                            Email
                        </label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            onChange={handleUpdateUserFormInputDetails}
                            defaultValue={currentUserInformation.email}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="address"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            Home Address
                        </label>
                        <input
                            name="address"
                            id="address"
                            type="text"
                            onChange={handleUpdateUserFormInputDetails}
                            defaultValue={currentUserInformation.address}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phoneNumber"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            Phone Number
                        </label>
                        <input
                            name="phoneNumber"
                            id="phoneNumber"
                            type="text"
                            onChange={handleUpdateUserFormInputDetails}
                            defaultValue={currentUserInformation.phoneNumber}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="picture"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            Profile Picture
                        </label>
                        <input
                            onChange={handleImageField}
                            name="picture"
                            id="picture"
                            type="file"
                            className="w-full cursor-pointer rounded-lg border border-dashed px-4 py-2"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        />
                    </div>

                    <div>
                        <label htmlFor="role" className="mb-1 block font-semibold text-[#1e1e19]">
                            Role
                        </label>
                        <select
                            defaultValue={currentUserInformation.role}
                            onChange={handleUpdateUserFormInputDetails}
                            name="role"
                            id="role"
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="isVerified"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            Verification Status
                        </label>
                        <select
                            defaultValue={currentUserInformation.isVerified.toString()}
                            name="isVerified"
                            id="isVerified"
                            onChange={handleUpdateUserFormInputDetails}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        >
                            <option value="true">Verified</option>
                            <option value="false">Non Verified</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="isBlocked"
                            className="mb-1 block font-semibold text-[#1e1e19]"
                        >
                            Status
                        </label>
                        <select
                            defaultValue={currentUserInformation.isBlocked.toString()}
                            name="isBlocked"
                            id="isBlocked"
                            onChange={handleUpdateUserFormInputDetails}
                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                            style={{ borderColor: "#D50B8B", color: "#1e1e19" }}
                        >
                            <option value="true">Block</option>
                            <option value="false">Un Block</option>
                        </select>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => handleUserUpdateFormSubmit(image)}
                    className="mt-6 w-full cursor-pointer rounded-lg px-6 py-2 font-semibold text-white transition hover:brightness-110 md:w-auto"
                    style={{ backgroundColor: "#D50B8B" }}
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateUserForm;
