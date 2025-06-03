import React from "react";

const ContactUs: React.FC = () => {
    return (
        <div>
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
                            Subscribe to our newsletter for exclusive offers, beauty tips, and
                            latest product launches
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="inline-flex rounded-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-64 rounded-l-lg border-0 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500"
                                />
                                <button className="rounded-r-lg bg-white px-6 py-2 text-[#D50B8B] hover:bg-pink-50">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
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
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                Email Support
                            </h3>
                            <p className="mt-2 text-gray-500">
                                24/7 email support for all your beauty needs
                            </p>
                        </div>

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
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                Fast Response
                            </h3>
                            <p className="mt-2 text-gray-500">
                                Quick response time to all inquiries
                            </p>
                        </div>

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
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                Satisfaction Guaranteed
                            </h3>
                            <p className="mt-2 text-gray-500">
                                100% satisfaction with our services
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-12">
                        <dl className="space-y-6">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <dt className="text-lg font-medium text-gray-900">
                                    What payment methods do you accept?
                                </dt>
                                <dd className="mt-2 text-gray-500">
                                    We accept all major credit cards, PayPal, and bank transfers.
                                </dd>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <dt className="text-lg font-medium text-gray-900">
                                    What is your return policy?
                                </dt>
                                <dd className="mt-2 text-gray-500">
                                    We offer a 30-day return policy for unused items in original
                                    packaging.
                                </dd>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <dt className="text-lg font-medium text-gray-900">
                                    Do you ship internationally?
                                </dt>
                                <dd className="mt-2 text-gray-500">
                                    Yes, we ship to most countries worldwide with tracking provided.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
