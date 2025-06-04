import React, { useState } from "react";
import ManageProfileForm from "./ManageProfileForm.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import getImageUrlsPromise from "../../../utility/promises/getImageUrlsPromise.ts";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import type { ICurrentUserInformationTypes } from "../../../utility/types/profile/profile";

const ManageProfile: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.authentication);
    const [currentUserDetails, setCurrentUserDetails] = useState<ICurrentUserInformationTypes>({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        profilePicture: user.profilePicture,
    });
    const handleManageProfileInputDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentUserDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleManageProfileSubmit = async (image: File | null | string | unknown) => {
        const toastId = toast.loading("Saving changes...");
        if (typeof image !== "string") {
            if (image instanceof File) {
                try {
                    currentUserDetails.profilePicture = await getImageUrlsPromise(image);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        try {
            const response = await axios.put(
                "/api/update-user/?id=" + user.userId,
                currentUserDetails
            );
            toast.dismiss(toastId);
            if (response.data.status === 200) {
                navigate("/profile/" + user.userId);
                toast.success("Changes saved successfully");
                Swal.fire({
                    title: "Please sign out and sign in again due to Profile Changes !",
                    icon: "success",
                    draggable: true,
                });
                return;
            }
            toast.error(response.data.message);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    return (
        <ManageProfileForm
            currentUserDetails={currentUserDetails}
            handleManageProfileInputDetails={handleManageProfileInputDetails}
            handleManageProfileSubmit={handleManageProfileSubmit}
        />
    );
};

export default ManageProfile;
