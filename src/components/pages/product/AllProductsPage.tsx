import React from "react";
import AllProductsHeroSection from "./AllProductsHeroSection.tsx";
import ProductCardSection from "./ProductCardSection.tsx";

const AllProductsPage: React.FC = () => {
    return (
        <div>
            <AllProductsHeroSection />
            <ProductCardSection />
        </div>
    );
};

export default AllProductsPage;
