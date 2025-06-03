import React from "react";

const FastResponse: React.FC = () => {
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Response</h3>
            <p className="mt-2 text-gray-500">Quick response time to all inquiries</p>
        </div>
    );
};

export default FastResponse;
