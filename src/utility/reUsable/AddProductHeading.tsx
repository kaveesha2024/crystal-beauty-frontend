import React from "react";
import { CircleAlert, ClipboardList, PlusCircle } from "lucide-react";

const AddProductHeading: React.FC = () => {
    return (
        <div className="mb-8 border-b border-[#D50B8B] pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 flex items-center sm:mb-0">
                    <PlusCircle className="mr-3 h-8 w-8 text-[#D50B8B]" />
                    <div>
                        <h1 className="text-2xl font-bold text-[#1e1e19]">Create New Product</h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Add a new product to your store catalog
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="flex items-center rounded-lg bg-[#D50B8B] px-4 py-2 text-white transition-colors hover:bg-[#a3096c]"
                    >
                        <ClipboardList className="mr-1 h-4 w-4" />
                        Import from CSV
                    </button>
                </div>
            </div>
            <div className="mt-4 flex items-start rounded-lg border border-[#D50B8B]/30 bg-[#FFEDFA] p-3">
                <CircleAlert className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-[#D50B8B]" />
                <div>
                    <p className="text-sm font-medium text-[#1e1e19]">
                        Required fields are marked with an asterisk (*)
                    </p>
                    <p className="mt-1 text-xs text-[#1e1e19]/80">
                        Complete all required fields to publish your product
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddProductHeading;
