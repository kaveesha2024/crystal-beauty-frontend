import React from "react";

const AllProductsHeroSection: React.FC = () => {
    return (
        <div className="relative h-[95vh] min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e19]/90 to-[#D50B8B]/70" />
                </div>
            </div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="mb-4 flex items-center justify-center space-x-2">
                    <div className="h-0.5 w-8 bg-[#FFEDFA]" />
                    <span className="font-medium tracking-wider text-[#FFEDFA] uppercase">
                        Premium Collection
                    </span>
                    <div className="h-0.5 w-8 bg-[#FFEDFA]" />
                </div>
                <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Discover Products That <br />
                    <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFEDFA] bg-clip-text text-transparent">
                        Inspire Your Style
                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-[#FFEDFA] sm:text-xl">
                    Explore our carefully curated collection of premium products designed to elevate
                    your everyday experience. Quality craftsmanship meets exceptional value.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button className="rounded-full bg-[#D50B8B] px-8 py-3 font-medium text-white transition-all hover:bg-[#a3096c] hover:shadow-lg hover:shadow-[#D50B8B]/30">
                        Shop New Arrivals
                    </button>
                    <button className="rounded-full border-2 border-[#FFEDFA] bg-transparent px-8 py-3 font-medium text-[#FFEDFA] transition-all hover:bg-[#FFEDFA]/10">
                        View Collections
                    </button>
                </div>
                <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 transform flex-wrap justify-center gap-8 rounded-xl bg-[#1e1e19]/80 px-8 py-4 backdrop-blur-sm">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#FFEDFA]">10K+</div>
                        <div className="text-sm text-[#FFEDFA]/80">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#FFEDFA]">200+</div>
                        <div className="text-sm text-[#FFEDFA]/80">Brand Partners</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#FFEDFA]">24/7</div>
                        <div className="text-sm text-[#FFEDFA]/80">Customer Support</div>
                    </div>
                </div>
            </div>
            <div className="animate-float absolute top-20 right-20 h-24 w-24 rounded-full bg-[#D50B8B]/30 blur-2xl"></div>
            <div className="animate-float animation-delay-2000 absolute bottom-40 left-32 h-16 w-16 rounded-full bg-[#FFEDFA]/40 blur-xl"></div>
        </div>
    );
};

export default AllProductsHeroSection;
