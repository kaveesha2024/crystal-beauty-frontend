import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="mt-30 flex h-full w-full justify-center">
            <div className="border-primary h-[50px] w-[50px] animate-spin rounded-full border-[5px] border-r-blue-600"></div>
        </div>
    );
};

export default Loading;
