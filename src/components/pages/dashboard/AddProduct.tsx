import React, { useState } from "react";
import AddProductForm from "./AddProductForm.tsx";
import type { IProductTypes } from "../../../utility/types/addProduct/addProduct";
import getImageUrlsPromise from "../../../utility/promises/getImageUrlsPromise.ts";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct: React.FC = () => {
    const [product, setProduct] = useState<IProductTypes>({
        productName: "",
        labelledPrice: 0,
        price: 0,
        stock: 0,
        alterNames: "",
        description: "",
        brand: "",
        warranty: "",
        images: [],
    });
    const handleAddProductInputDetails = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };
    const handleAddProductSubmit = async (productImage: FileList | []) => {
        if (
            product.productName === "" ||
            product.labelledPrice === 0 ||
            product.price === 0 ||
            product.stock === 0 ||
            product.alterNames === "" ||
            product.description === "" ||
            product.brand === "" ||
            product.warranty === ""
        ) {
            toast.error("Please fill all the fields");
            return;
        }
        if (productImage && productImage.length > 0) {
            let images = [];
            for (let i = 0; i < productImage.length; i++) {
                images[i] = getImageUrlsPromise(productImage[i]);
            }
            product.images = await Promise.all(images);
        }
        try {
            const response = await axios.post("/api/add_product", product);
            if (response.data.status === 200) {
                toast.success("Product added successfully");
                return;
            }
            toast.error(response.data.message);
            return;
        } catch (e) {
            toast.error("Something went wrong");
        }
    };
    return (
        <AddProductForm
            handleAddProductSubmit={handleAddProductSubmit}
            handleAddProductInputDetails={handleAddProductInputDetails}
        />
    );
};

export default AddProduct;
