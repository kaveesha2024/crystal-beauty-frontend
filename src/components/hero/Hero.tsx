import React from "react";
export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#FFEDFA] overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-sans md:text-5xl lg:text-6xl font-bold text-[#1e1e19] mb-6">
            Discover Your Natural Beauty
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Premium cosmetics that enhance your radiance and celebrate your
            unique beauty
          </p>
          <button className="bg-[#D50B8B] cursor-pointer text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#D50B8B]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
