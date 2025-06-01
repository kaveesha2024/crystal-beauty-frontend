import React, { useEffect } from "react";
import AllProductsHeroSection from "./AllProductsHeroSection.tsx";
import ProductCardSection from "./ProductCardSection.tsx";

const AllProductsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <AllProductsHeroSection />
            <ProductCardSection />
        </div>
    );
};

export default AllProductsPage;
