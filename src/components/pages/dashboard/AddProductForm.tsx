import React, { useState } from "react";
import { PackagePlus } from "lucide-react";
interface IAddProductFormPropTypes {
    handleAddProductInputDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddProductSubmit: (image: FileList | []) => void;
}
const AddProductForm: React.FC<IAddProductFormPropTypes> = ({
    handleAddProductInputDetails,
    handleAddProductSubmit,
}) => {
    const [ProductImage, setProductImage] = useState<FileList | []>([]);
    const handleProductImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        if (file === null) return;
        setProductImage(file);
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FFEDFA] p-6">
            <form className="w-full max-w-2xl space-y-5 rounded-2xl bg-white p-6 shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-[#D50B8B]">
                    <span className="flex items-center gap-2">
                        <PackagePlus /> Add New Product
                    </span>
                </h2>

                <div className="flex flex-col">
                    <label htmlFor="productName" className="mb-1 font-semibold text-[#1e1e19]">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="productName"
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="labelledPrice" className="mb-1 font-semibold text-[#1e1e19]">
                        Labelled Price
                    </label>
                    <input
                        type="number"
                        name="labelledPrice"
                        min={0}
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price" className="mb-1 font-semibold text-[#1e1e19]">
                        Product Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        min={0}
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="stock" className="mb-1 font-semibold text-[#1e1e19]">
                        Stock
                    </label>
                    <input
                        type="number"
                        name="stock"
                        min={0}
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="alterNames" className="mb-1 font-semibold text-[#1e1e19]">
                        Alternative Names
                    </label>
                    <input
                        type="text"
                        name="alterNames"
                        placeholder="use '/ ' for separates"
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-1 font-semibold text-[#1e1e19]">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="brand" className="mb-1 font-semibold text-[#1e1e19]">
                        Product Brand
                    </label>
                    <input
                        type="text"
                        name="brand"
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="warranty" className="mb-1 font-semibold text-[#1e1e19]">
                        Warranty
                    </label>
                    <input
                        type="text"
                        name="warranty"
                        onChange={handleAddProductInputDetails}
                        className="rounded border border-[#D50B8B] px-3 py-2 focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="images" className="mb-1 font-semibold text-[#1e1e19]">
                        Product Images
                    </label>
                    <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleProductImage}
                        className="file:cursor-pointer file:rounded-lg file:border-none file:bg-[#D50B8B] file:px-4 file:py-2 file:text-white"
                    />
                </div>

                <button
                    onClick={() => handleAddProductSubmit(ProductImage)}
                    type="button"
                    className="w-full cursor-pointer rounded-lg bg-[#D50B8B] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-pink-700"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
