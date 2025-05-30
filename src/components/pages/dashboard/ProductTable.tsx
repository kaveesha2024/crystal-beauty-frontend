import React from "react";
import type { IAllProductsTypes } from "../../../utility/types/getProducts/getProducts";
import TableHeader from "../../../utility/reUsable/TableHeader.tsx";
import { headings } from "../../../utility/others/refactor.ts";
import { Pencil, Trash } from "lucide-react";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import LoadingTableRow from "../../../utility/reUsable/LoadingTableRow.tsx";
interface IProductTablePropsTypes {
    allProducts: IAllProductsTypes[];
    deleteProduct: (productId: string) => void;
}
const ProductTable: React.FC<IProductTablePropsTypes> = ({ allProducts, deleteProduct }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="relative mt-10 mr-5 mb-10">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headings.map((heading: string, index: number) => (
                            <TableHeader key={index} header={heading} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allProducts.length > 0 ? (
                        allProducts.map((product: IAllProductsTypes, index: number) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td className="px-6 py-4">{product.productId}</td>
                                <td className="px-6 py-4">{product.productName}</td>
                                <td className="px-6 py-4">LKR {product.price.toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    LKR {product.labelledPrice.toFixed(2)}
                                </td>
                                <td className="px-6 py-4">LKR {product.discount.toFixed(2)}</td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">{product.warranty}</td>
                                <td className="px-6 py-4">{product.alterNames.join("/")}</td>
                                <td className="line-clamp-3 px-6 py-4 pb-2">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4">{product.brand}</td>
                                <td className="px-6 py-4">
                                    {product.isAvailable ? (
                                        <span className="text-green-400">In Stock</span>
                                    ) : (
                                        <span className="text-red-500">Out Of Stock</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <img
                                        className="h-[60px] w-[60px] object-cover"
                                        src={product.images[0]}
                                        alt=""
                                    />
                                </td>
                                <td className="flex gap-2 px-6 py-4">
                                    <button
                                        onClick={() =>
                                            navigate(`update/${product.productId}`, {
                                                state: product,
                                            })
                                        }
                                        className="hover:text-accent cursor-pointer text-blue-600 transition duration-100 hover:scale-95 active:text-black"
                                    >
                                        <Pencil />
                                    </button>
                                    <button
                                        onClick={() => deleteProduct(product.productId)}
                                        className="hover:text-accent cursor-pointer text-red-600 transition duration-100 hover:scale-95 active:text-black"
                                    >
                                        <Trash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                            <LoadingTableRow />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
