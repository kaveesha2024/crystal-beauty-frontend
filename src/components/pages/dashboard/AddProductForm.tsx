import React, { useState } from "react";
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
        <div>
            <form>
                <div>
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" onChange={handleAddProductInputDetails} />
                </div>
                <div>
                    <label htmlFor="labelledPrice">Labelled Price</label>
                    <input
                        type="number"
                        name="labelledPrice"
                        min={0}
                        onChange={handleAddProductInputDetails}
                    />
                </div>
                <div>
                    <label htmlFor="price">Product Price</label>
                    <input
                        type="number"
                        name="price"
                        min={0}
                        onChange={handleAddProductInputDetails}
                    />
                </div>
                <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        min={0}
                        onChange={handleAddProductInputDetails}
                    />
                </div>
                <div>
                    <label htmlFor="alterNames">Alternative Names</label>
                    <input
                        type="text"
                        placeholder="use '/ ' for separates"
                        name="alterNames"
                        onChange={handleAddProductInputDetails}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" onChange={handleAddProductInputDetails} />
                </div>
                <div>
                    <label htmlFor="brand">Product Brand</label>
                    <input type="text" name="brand" onChange={handleAddProductInputDetails} />
                </div>
                <div>
                    <label htmlFor="warranty">Warranty</label>
                    <input type="text" name="warranty" onChange={handleAddProductInputDetails} />
                </div>
                <div>
                    <label htmlFor="images">Product Images</label>
                    <input type="file" name="images" multiple onChange={handleProductImage} />
                </div>
                <button onClick={() => handleAddProductSubmit(ProductImage)} type="button">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
