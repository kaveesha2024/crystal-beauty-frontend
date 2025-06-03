import React from "react";

const FrequentlyAskedQuestionsSection: React.FC = () => {
    return (
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
    );
};

export default FrequentlyAskedQuestionsSection;
