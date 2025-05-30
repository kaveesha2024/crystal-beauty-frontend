import React, { useState } from "react";
import type { IUpdatedProductDetailsTypes } from "../../../utility/types/updateProduct/updateProduct";

interface IUpdateProductFormPropsTypes {
    updatedProductDetails: IUpdatedProductDetailsTypes;
    handleUpdateProductInputFieldsDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpdateProductSelectFieldsDetails: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleUpdateFormSubmit: (image: FileList | []) => void;
}
const UpdateProductForm: React.FC<IUpdateProductFormPropsTypes> = ({
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
        <div>
            <form>
                <div>
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        defaultValue={updatedProductDetails.productName}
                        onChange={handleUpdateProductInputFieldsDetails}
                    />
                </div>
                <div>
                    <label>Product Labelled Price</label>
                    <input
                        type="number"
                        name="labelledPrice"
                        defaultValue={updatedProductDetails.labelledPrice}
                        onChange={handleUpdateProductInputFieldsDetails}
                    />
                </div>
                <div>
                    <label>Product Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.price}
                    />
                </div>
                <div>
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.stock}
                    />
                </div>
                <div>
                    <label>Alternative Names</label>
                    <input
                        type="text"
                        name="alterNames"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.alterNames}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.description}
                    />
                </div>
                <div>
                    <label>Brand</label>
                    <input
                        type="text"
                        onChange={handleUpdateProductInputFieldsDetails}
                        name="brand"
                        defaultValue={updatedProductDetails.brand}
                    />
                </div>
                <div>
                    <label>Warranty</label>
                    <input
                        type="text"
                        name="warranty"
                        onChange={handleUpdateProductInputFieldsDetails}
                        defaultValue={updatedProductDetails.warranty}
                    />
                </div>
                <div>
                    <p>Updating images will replace all the old pictures !</p>
                    <label>Product Images</label>
                    <input multiple type="file" name="images" onChange={handleProductImages} />
                </div>
                <select
                    name="isAvailable"
                    onChange={handleUpdateProductSelectFieldsDetails}
                    defaultValue={updatedProductDetails.isAvailable.toString()}
                >
                    <option value="false">Not Available</option>
                    <option value="true">Available</option>
                </select>
                <button type={"button"} onClick={() => handleUpdateFormSubmit(files)}>
                    Save Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProductForm;
