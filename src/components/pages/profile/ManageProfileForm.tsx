import React, { useState } from "react";
import type { ICurrentUserInformationTypes } from "./ManageProfile.tsx";
import { formFields, inputClassName } from "../../../utility/others/refactor.ts";
import type { IManageProfileFormPropsTypes } from "../../../utility/types/manageProfile/manageProfile";
const ManageProfileForm: React.FC<IManageProfileFormPropsTypes> = ({
    currentUserDetails,
    handleManageProfileSubmit,
    handleManageProfileInputDetails,
}) => {
    const [profilePicture, setProfilePicture] = useState<string | File | unknown>(
        currentUserDetails.profilePicture
    );

    const handleProfilePictureInputDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        if (file === null) return;
        setProfilePicture(file[0]);
    };

    return (
        <form className="mx-auto max-w-xl space-y-6 rounded-2xl bg-[#FFEDFA] p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-[#1e1e19]">Manage Profile</h2>
            {formFields.map(field => (
                <div key={field.name}>
                    <label htmlFor={field.name} className="mb-1 block font-medium text-[#1e1e19]">
                        {field.label}
                    </label>
                    <input
                        onChange={handleManageProfileInputDetails}
                        defaultValue={
                            currentUserDetails[
                                field.name as keyof ICurrentUserInformationTypes
                            ] as string
                        }
                        type={field.type}
                        name={field.name}
                        className={inputClassName}
                    />
                </div>
            ))}
            <div>
                <label htmlFor="profilePicture" className="mb-1 block font-medium text-[#1e1e19]">
                    Profile Picture
                </label>
                <input
                    type="file"
                    onChange={handleProfilePictureInputDetails}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19]"
                />
            </div>
            <div className="pt-4">
                <button
                    type="button"
                    onClick={() => handleManageProfileSubmit(profilePicture)}
                    className="w-full cursor-pointer rounded-lg bg-[#D50B8B] px-6 py-3 font-semibold text-white transition duration-200 hover:bg-pink-700"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
};

export default ManageProfileForm;
