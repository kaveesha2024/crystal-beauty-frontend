import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateUserForm from "./UpdateUserForm.tsx";
import type { ICurrentUserInformationTypes } from "../../../utility/types/updateUser/updateUser";
import getImageUrlsPromise from "../../../utility/promises/getImageUrlsPromise.ts";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser: React.FC = () => {
    const user = useLocation().state.user;
    const navigate = useNavigate();
    const [currentUserInformation, setCurrentUserInformation] =
        useState<ICurrentUserInformationTypes>({
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            profilePicture: user.profilePicture,
            isBlocked: user.isBlocked,
            isVerified: user.isVerified,
            role: user.role,
            email: user.email,
        });
    const handleUpdateUserFormInputDetails = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setCurrentUserInformation({
            ...currentUserInformation,
            [name]: value,
        });
    };
    const handleUserUpdateFormSubmit = async (image: File | null) => {
        if (
            currentUserInformation.firstName === "" ||
            currentUserInformation.lastName === "" ||
            currentUserInformation.phoneNumber === "" ||
            currentUserInformation.address === "" ||
            currentUserInformation.email === ""
        ) {
            toast.error("Please fill all the fields");
            return;
        }
        let url: unknown | string = "";
        if (image instanceof File) {
            try {
                url = await getImageUrlsPromise(image);
            } catch (error) {
                console.log(error);
            }
        }
        if (url || url !== "") {
            currentUserInformation.profilePicture = url;
        }
        try {
            const response = await axios.put(
                `api/update-user/?id=${user.userId}`,
                currentUserInformation
            );
            if (response.data.status === 200) {
                toast.success("User updated successfully");
                navigate(-1);
                return;
            }
            toast.error(response.data.message);
            return;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <UpdateUserForm
            currentUserInformation={currentUserInformation}
            handleUpdateUserFormInputDetails={handleUpdateUserFormInputDetails}
            handleUserUpdateFormSubmit={handleUserUpdateFormSubmit}
        />
    );
};

export default UpdateUser;
