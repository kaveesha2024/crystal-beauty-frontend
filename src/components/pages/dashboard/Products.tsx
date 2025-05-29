import React from "react";
import ProductTable from "./ProductTable.tsx";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
    return (
        <div className="h-full">
            <Link
                className="hover:text-accent transition duration-200 hover:scale-95 hover:underline"
                to="add_product"
            >
                add new
            </Link>
            <ProductTable />
        </div>
    );
};

export default Products;
