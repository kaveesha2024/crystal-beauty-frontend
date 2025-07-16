import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ProductOverView from "./ProductOverView.tsx";
import Comments from "../comments/Comments.tsx";

const ProductOverViewPage: React.FC = () => {
    const productId: string | undefined = useParams().id;
    const [product, setProduct] = useState<IAllProductsTypes | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        if (isLoading) {
            getProductById();
            setIsLoading(false);
        }
    }, [isLoading]);
    const getProductById = async (): Promise<void> => {
        const toastId = toast.loading("Loading product...");
        try {
            const response = await axios.get(`/api/get_product/by_id?productId=${productId}`);
            if (response.data.status === 200) {
                toast.dismiss(toastId);
                setProduct(response.data.message);
            }
        } catch (error) {
            toast.dismiss(toastId);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };
    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : product === null ? (
                <div>Product not found</div>
            ) : (
                <>
                    <ProductOverView product={product} />
                    <Comments />
                </>
            )}
        </div>
    );
};

export default ProductOverViewPage;
