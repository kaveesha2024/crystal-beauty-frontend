import React from "react";

const LoadingTableRow: React.FC = () => {
    return (
        <td className="px-6 py-4">
            <div className="border-primary h-[40px] w-[40px] animate-spin rounded-full border-[5px] border-r-blue-600"></div>
        </td>
    );
};

export default LoadingTableRow;
