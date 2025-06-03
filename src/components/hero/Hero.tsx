import React from "react";

export const Hero: React.FC = () => {
    return (
        <div className="relative h-[70vh] overflow-hidden bg-[#FFEDFA]">
            <div
                className={
                    "absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80')] opacity-40"
                }
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-2xl">
                    <h1 className="mb-6 font-sans text-4xl font-bold text-[#1e1e19] md:text-5xl lg:text-6xl">
                        Discover Your Natural Beauty
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 md:text-2xl">
                        Premium cosmetics that enhance your radiance and celebrate your unique
                        beauty
                    </p>
                    <button className="cursor-pointer rounded-md bg-[#D50B8B] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#D50B8B]/90 focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2 focus:outline-none">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};
