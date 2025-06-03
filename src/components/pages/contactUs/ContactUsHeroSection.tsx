import React from "react";

const ContactUsHeroSection: React.FC = () => {
    return (
        <div className="relative mt-8 overflow-hidden rounded-lg bg-[#D50B8B] py-16">
            <div className="absolute inset-0">
                <div className="h-full w-full bg-[url('/beauty-pattern.jpg')] opacity-10"></div>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Join Our Beauty Community
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-pink-100">
                        Subscribe to our newsletter for exclusive offers, beauty tips, and latest
                        product launches
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="inline-flex rounded-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-64 rounded-l-lg border-0 bg-white px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500"
                            />
                            <button className="rounded-r-lg bg-white px-6 py-2 text-[#D50B8B] hover:bg-pink-50">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsHeroSection;
