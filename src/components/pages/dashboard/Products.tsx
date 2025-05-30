import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable.tsx";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
import { PackagePlus } from "lucide-react";

const Products: React.FC = () => {
    const [allProducts, setAllProducts] = useState<IAllProductsTypes[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isLoading) {
            getAllProducts();
            setIsLoading(false);
        }
    }, [isLoading]);
    const getAllProducts = async () => {
        const response = await axios.get("/api/get_all_products");
        if (response.data.status === 200) {
            setAllProducts(response.data.message);
            return;
        }
        toast.error(response.data.message);
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
            <ProductTable allProducts={allProducts} />
        </div>
    );
};

export default Products;
