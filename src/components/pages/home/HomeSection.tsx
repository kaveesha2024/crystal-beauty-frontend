import React from "react";

const HomeSection: React.FC = () => {
    const featuredProducts = [
        { id: 1, name: "Rose Quartz Facial Roller", price: "$24.99", rating: 4.8 },
        { id: 2, name: "Amethyst Gua Sha Stone", price: "$19.99", rating: 4.9 },
        { id: 3, name: "Clear Quartz Serum Set", price: "$34.99", rating: 4.7 },
        { id: 4, name: "Jade Facial Massager", price: "$22.99", rating: 4.6 },
    ];

    const testimonials = [
        { id: 1, text: "These crystal tools transformed my skincare routine!", author: "Emma R." },
        { id: 2, text: "My skin has never looked better. Worth every penny!", author: "Sophie T." },
        { id: 3, text: "Beautiful products that actually deliver results.", author: "Mia K." },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-2 text-3xl font-bold">Featured Products</h2>
                        <div
                            className="mx-auto h-1 w-20"
                            style={{ backgroundColor: "#D50B8B" }}
                        ></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="group">
                                <div className="mb-4 flex h-64 items-center justify-center rounded-xl bg-gray-100">
                                    <div className="flex h-3/4 w-3/4 items-center justify-center rounded-xl border-2 border-dashed bg-gray-200 text-gray-500">
                                        Product Image
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
                                    <div className="mb-2 flex items-center justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="ml-1 text-sm text-gray-600">
                                            ({product.rating})
                                        </span>
                                    </div>
                                    <p className="font-bold" style={{ color: "#D50B8B" }}>
                                        {product.price}
                                    </p>
                                    <button
                                        className="mt-4 rounded-full border px-6 py-2 font-medium transition-colors hover:bg-gray-50"
                                        style={{ borderColor: "#D50B8B", color: "#D50B8B" }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16" style={{ backgroundColor: "#F8E1EF" }}>
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-2 text-3xl font-bold">Customer Love</h2>
                        <div
                            className="mx-auto h-1 w-20"
                            style={{ backgroundColor: "#D50B8B" }}
                        ></div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="rounded-xl p-6 shadow-sm">
                                <div className="mb-4 flex" style={{ color: "#D50B8B" }}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mb-4 text-gray-600 italic">"{testimonial.text}"</p>
                                <p className="font-semibold" style={{ color: "#D50B8B" }}>
                                    {testimonial.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16">
                <div className="container mx-auto max-w-3xl px-4 text-center">
                    <h2 className="mb-2 text-3xl font-bold">Join Our Crystal Community</h2>
                    <p className="mx-auto mb-8 max-w-xl text-gray-600">
                        Subscribe to receive beauty tips, special offers, and updates on new
                        arrivals
                    </p>
                    <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="focus:ring-opacity-50 flex-grow rounded-full border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                        />
                        <button
                            className="rounded-full px-6 py-3 font-bold text-white shadow-md transition-opacity hover:opacity-90"
                            style={{ backgroundColor: "#D50B8B" }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeSection;
