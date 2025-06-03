import React from "react";

const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen px-4 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h1 className="mb-4 text-5xl font-bold text-[#D50B8B]">About Crystal Beauty</h1>
                    <p className="text-var(--color-secondary) mb-12 text-xl">
                        Redefining Beauty Since 2015
                    </p>
                </div>

                <div className="mb-16 grid gap-8 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-bold text-[#D50B8B]">Our Mission</h3>
                        <p className="text-var(--color-secondary)">
                            To provide high-quality beauty products that enhance natural beauty and
                            boost confidence in every individual.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-bold text-[#D50B8B]">Our Vision</h3>
                        <p className="text-var(--color-secondary)">
                            To become the leading beauty destination that celebrates diversity and
                            promotes self-expression through beauty.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-bold text-[#D50B8B]">Our Values</h3>
                        <p className="text-var(--color-secondary)">
                            Quality, Innovation, Sustainability, and Customer Satisfaction drive
                            everything we do.
                        </p>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-[#D50B8B]">
                        Our Story
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <p className="text-var(--color-secondary)">
                                Founded in 2015, Crystal Beauty began as a small boutique in
                                downtown Paris. Our passion for beauty and commitment to quality
                                quickly earned us a loyal following. Today, we serve customers
                                worldwide, offering a carefully curated selection of premium beauty
                                products.
                            </p>
                        </div>
                        <div className="h-64 rounded-lg bg-gray-200"></div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="mb-8 text-3xl font-bold text-[#D50B8B]">Our Team</h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
                            <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-gray-200"></div>
                            <h3 className="text-xl font-bold text-[#D50B8B]">Sophie Laurent</h3>
                            <p className="text-var(--color-secondary)">Founder & CEO</p>
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
                            <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-gray-200"></div>
                            <h3 className="text-xl font-bold text-[#D50B8B]">Marie Dubois</h3>
                            <p className="text-var(--color-secondary)">Creative Director</p>
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
                            <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-gray-200"></div>
                            <h3 className="text-xl font-bold text-[#D50B8B]">Pierre Martin</h3>
                            <p className="text-var(--color-secondary)">Product Manager</p>
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
                            <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-gray-200"></div>
                            <h3 className="text-xl font-bold text-[#D50B8B]">Claire Benoit</h3>
                            <p className="text-var(--color-secondary)">Beauty Expert</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
