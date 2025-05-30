import React, { useState } from "react";
import type { IUpdateProductFormPropTypes } from "../../../utility/types/updateProduct/updateProduct";
import UpdateProductFormHeading from "../../../utility/reUsable/UpdateProductFormHeading.tsx";
const UpdateProductForm: React.FC<IUpdateProductFormPropTypes> = ({
    updatedProductDetails,
    handleUpdateProductInputFieldsDetails,
    handleUpdateProductSelectFieldsDetails,
    handleUpdateFormSubmit,
}) => {
    const [files, setFiles] = useState<FileList | []>([]);
    const handleProductImages = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files === null) return;
        const file: FileList = event.target.files;
        setFiles(file);
    };
    return (
        <div className="mx-auto max-w-4xl rounded-xl bg-[#FFEDFA] p-6 shadow-lg">
            <UpdateProductFormHeading />
            <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="productName"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                            defaultValue={updatedProductDetails.productName}
                            onChange={handleUpdateProductInputFieldsDetails}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                            Product Labelled Price
                        </label>
                        <input
                            type="number"
                            name="labelledPrice"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                            defaultValue={updatedProductDetails.labelledPrice}
                            onChange={handleUpdateProductInputFieldsDetails}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                            Product Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                            onChange={handleUpdateProductInputFieldsDetails}
                            defaultValue={updatedProductDetails.price}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                            Stock
                        </label>
                        <input
                            type="number"
                            name="stock"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                            onChange={handleUpdateProductInputFieldsDetails}
                            defaultValue={updatedProductDetails.stock}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                            Alternative Names
                        </label>
                        <input
                            type="text"
                            name="alterNames"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                            onChange={handleUpdateProductInputFieldsDetails}
                            defaultValue={updatedProductDetails.alterNames}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                            Brand
                        </label>
                        <input
                            type="text"
                            onChange={handleUpdateProductInputFieldsDetails}
                            name="brand"
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                            defaultValue={updatedProductDetails.brand}
                        />
                    </div>
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.description}
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                        Warranty
                    </label>
                    <input
                        type="text"
                        name="warranty"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.warranty}
                    />
                </div>
                <div>
                    <p className="mb-1 text-sm text-rose-600 italic">
                        Updating images will replace all the old pictures!
                    </p>
                    <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                        Product Images
                    </label>
                    <input
                        multiple
                        type="file"
                        name="images"
                        className="w-full file:mr-4 file:rounded-lg file:border-0 file:bg-[#D50B8B] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#a3096c]"
                        onChange={handleProductImages}
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-[#1e1e19]">
                        Availability
                    </label>
                    <select
                        name="isAvailable"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:border-transparent focus:ring-2 focus:ring-[#D50B8B]"
                        onChange={handleUpdateProductSelectFieldsDetails}
                        defaultValue={updatedProductDetails.isAvailable.toString()}
                    >
                        <option value="false">Not Available</option>
                        <option value="true">Available</option>
                    </select>
                </div>
                <button
                    type="button"
                    onClick={() => handleUpdateFormSubmit(files)}
                    className="bg-accent w-full cursor-pointer rounded-lg px-4 py-3 font-medium text-white transition duration-200 hover:bg-[#a3096c] focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2 focus:outline-none"
                >
                    Save Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProductForm;
