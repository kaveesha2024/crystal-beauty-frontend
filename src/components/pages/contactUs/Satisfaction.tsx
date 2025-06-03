import React from "react";

const Satisfaction: React.FC = () => {
    return (
        <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-[#D50B8B] p-2">
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Satisfaction Guaranteed</h3>
            <p className="mt-2 text-gray-500">100% satisfaction with our services</p>
        </div>
    );
};

export default Satisfaction;
