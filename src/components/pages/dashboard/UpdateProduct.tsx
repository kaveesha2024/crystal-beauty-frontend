import React, { useState } from "react";
import UpdateProductForm from "./UpdateProductForm.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import type { IUpdatedProductDetailsTypes } from "../../../utility/types/updateProduct/updateProduct";
import getImageUrlsPromise from "../../../utility/promises/getImageUrlsPromise.ts";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateProduct: React.FC = () => {
    const navigate = useNavigate();
    const {
        productId,
        productName,
        labelledPrice,
        price,
        stock,
        alterNames,
        description,
        brand,
        warranty,
        images,
        isAvailable,
    } = useLocation().state;
    const [updatedProductDetails, setUpdatedProductDetails] = useState<IUpdatedProductDetailsTypes>(
        {
            productName,
            labelledPrice,
            price,
            stock,
            alterNames: alterNames.join("/"),
            description,
            brand,
            warranty,
            images,
            isAvailable,
        }
    );
    console.log(updatedProductDetails);
    const handleUpdateProductInputFieldsDetails = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setUpdatedProductDetails((prevState: IUpdatedProductDetailsTypes) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleUpdateProductSelectFieldsDetails = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        const value = event.target.value;
        if (value === "true") {
            setUpdatedProductDetails({
                ...updatedProductDetails,
                isAvailable: true,
            });
        } else {
            setUpdatedProductDetails({
                ...updatedProductDetails,
                isAvailable: false,
            });
        }
    };
    const handleUpdateFormSubmit = async (images: FileList | []) => {
        const toastId = toast.loading("Saving changes...");
        if (images.length > 0) {
            let imagesArray = [];
            for (let i = 0; i < images.length; i++) {
                imagesArray[i] = getImageUrlsPromise(images[i]);
            }
            updatedProductDetails.images = await Promise.all(imagesArray);
        }
        try {
            const response = await axios.put(
                `/api/update_product/?productId=${productId}`,
                updatedProductDetails
            );
            if (response.data.status === 200) {
                toast.dismiss(toastId);
                navigate(-1);
                toast.success("Product updated successfully");
                return;
            }
        } catch (error) {
            toast.dismiss(toastId);
            toast.error("Something went wrong");
        }
    };
    return (
        <UpdateProductForm
            updatedProductDetails={updatedProductDetails}
            handleUpdateProductInputFieldsDetails={handleUpdateProductInputFieldsDetails}
            handleUpdateProductSelectFieldsDetails={handleUpdateProductSelectFieldsDetails}
            handleUpdateFormSubmit={handleUpdateFormSubmit}
        />
    );
};

export default UpdateProduct;
