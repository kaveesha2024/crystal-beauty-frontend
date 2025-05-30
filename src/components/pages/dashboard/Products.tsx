import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable.tsx";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
import { PackagePlus } from "lucide-react";
import Swal from "sweetalert2";

const Products: React.FC = () => {
    const [allProducts, setAllProducts] = useState<IAllProductsTypes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        if (isLoading) {
            getAllProducts();
            setIsLoading(false);
        }
    }, [isLoading]);
    const getAllProducts = async (): Promise<void> => {
        const response = await axios.get("/api/get_all_products");
        if (response.data.status === 200) {
            setAllProducts(response.data.message);
            return;
        }
        toast.error(response.data.message);
    };
    const deleteProduct = async (productId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(
                        "/api/delete_product?productId=" + productId
                    );
                    if (response.data.status === 200) {
                        setIsLoading(true);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Product deleted successfully",
                            icon: "success",
                        });
                        return;
                    }
                } catch (error) {
                    toast.error("something went wrong.");
                }
            }
        });
    };
    return (
        <div className="h-full">
            <Link
                className="hover:text-accent transition duration-200 hover:scale-95 hover:underline"
                to="add_product"
            >
                <span className="flex gap-1">
                    <PackagePlus />
                    add new
                </span>
            </Link>
            <ProductTable allProducts={allProducts} deleteProduct={deleteProduct} />
        </div>
    );
};

export default Products;
