import React from "react";
import { CircleAlert, Edit, Eye, Trash2 } from "lucide-react";

const UpdateProductFormHeading: React.FC = () => {
    return (
        <div className="mb-8 border-b border-[#D50B8B] pb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Edit className="h-8 w-8 text-[#D50B8B]" />
                    <div>
                        <h1 className="text-2xl font-bold text-[#1e1e19]">Update Product</h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Edit your product details below
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="flex items-center border-[#D50B8B] text-[#1e1e19] hover:bg-[#FFEDFA]">
                        <Eye className="mr-1 h-4 w-4" />
                        Preview
                    </button>
                    <button className="flex items-center border-[#D50B8B] text-[#1e1e19] hover:bg-[#FFEDFA]">
                        <Trash2 className="mr-1 h-4 w-4" />
                        Delete
                    </button>
                </div>
            </div>

            <div className="mt-4 flex items-center space-x-2">
                <div className="flex items-center text-sm text-[#D50B8B]">
                    <CircleAlert className="mr-1 h-4 w-4" />
                    <span>Changes will be reflected across all storefronts</span>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductFormHeading;
