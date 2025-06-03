import React from "react";

const EmailSupport: React.FC = () => {
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
                        d="M3 5h18l-9 9z"
                    />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email Support</h3>
            <p className="mt-2 text-gray-500">24/7 email support for all your beauty needs</p>
        </div>
    );
};

export default EmailSupport;
