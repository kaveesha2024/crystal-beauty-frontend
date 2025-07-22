import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.tsx";
import axios from "axios";
import toast from "react-hot-toast";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
import { type NavigateFunction, useNavigate } from "react-router-dom";

const ProductCardSection: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [products, setProducts] = useState<IAllProductsTypes[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        if (isLoading) {
            getProducts();
            setIsLoading(false);
        }
    }, [isLoading]);
    window.scrollTo(0, 0);
    const getProducts = async (): Promise<void> => {
        try {
            const response = await axios.get("/api/get_all_products");
            setProducts(response.data?.message);
        } catch (error) {
            toast.error("something went wrong.");
        }
    };
    return (
        <div className="flex w-full flex-wrap justify-center gap-5 p-5">
            {products.length > 0 &&
                products.map((product, index: number) => (
                    <div
                        key={index}
                        onClick={() => navigate("view_product_details/" + product.productId)}
                    >
                        <ProductCard
                            price={product.price}
                            labelledPrice={product.labelledPrice}
                            discount={product.discount}
                            brand={product.brand}
                            productName={product.productName}
                            description={product.description}
                            image={product.images[0]}
                        />
                    </div>
                ))}
        </div>
    );
};

export default ProductCardSection;
