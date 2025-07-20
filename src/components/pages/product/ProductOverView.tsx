import React, { useState } from "react";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import { addToCart } from "../../../utility/slices/CartSlice/CartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import type { dispatchType, RootState } from "../../../../store.ts";
import Swal from "sweetalert2";
import type { IProductOverViewPropsTypes } from "../../../utility/types/productOverView/productOverView";
import { type NavigateFunction, useNavigate } from "react-router-dom";

const ProductOverView: React.FC<IProductOverViewPropsTypes> = ({ product }) => {
    const dispatch = useDispatch<dispatchType>();
    const { cart } = useSelector((state: RootState) => state.cart);
    const [currentPicture, setCurrentPicture] = useState<string>(product?.images[0]);
    const navigate: NavigateFunction = useNavigate();
    window.scrollTo(0, 0);
    const handleAddToCart = (): void => {
        const productInCart = cart.findIndex(
            productInCart => productInCart.productId === product.productId
        );
        if (productInCart === -1) {
            dispatch(addToCart(product));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product added to cart",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        Swal.fire({
            title: "This product is already in your cart",
            icon: "success",
            draggable: true,
        });
    };
    return (
        <div className="mb-5 flex w-full flex-col items-center justify-center gap-5 px-4 py-5 md:flex-row md:px-20 md:py-10">
            {/* Image Gallery Section */}
            <div className="relative w-full bg-white pt-5 md:w-[50%]">
                <div className="absolute top-5 right-5">
                    <Heart />
                </div>
                <div className="mb-4 flex items-center justify-center md:mb-0">
                    <img
                        src={currentPicture}
                        className="h-auto max-h-[400px] w-full max-w-[450px] object-contain md:max-h-[450px]"
                        alt="main product"
                    />
                </div>
                <div className="flex items-center justify-start gap-2 overflow-x-auto py-4 md:justify-center md:gap-5">
                    {product.images?.map((image: string, index: number) => (
                        <img
                            onClick={() => setCurrentPicture(image)}
                            className={`h-[80px] w-[80px] cursor-pointer object-cover transition duration-300 hover:scale-95 md:h-[120px] md:w-[120px] ${
                                currentPicture === image ? "outline-accent outline-2" : ""
                            }`}
                            key={index}
                            src={image}
                            alt={`product thumbnail ${index}`}
                        />
                    ))}
                </div>
            </div>

            {/* Product Details Section */}
            <div className="flex w-full flex-col justify-between bg-white px-4 py-5 pb-10 md:w-[50%] md:px-5 md:pb-20">
                <div className="mb-6 flex flex-col justify-between md:mb-10">
                    <div className="flex justify-between">
                        <p className="spaced text-xs font-bold uppercase md:text-sm">
                            {product.brand}
                        </p>
                        <p className="text-secondary/20 text-xs md:text-sm">{product.productId}</p>
                    </div>

                    <div className="mb-4 text-center md:mb-5">
                        <h2 className="mt-5 font-serif text-2xl font-bold md:text-4xl">
                            {product.productName}
                        </h2>
                        {product.alterNames.length > 0 && (
                            <div className="mt-2 flex flex-wrap justify-center gap-1">
                                {product.alterNames.map((name: string, index: number) => (
                                    <span className="text-secondary/40 text-sm" key={index}>
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                        <div className="flex items-end gap-2">
                            <p className="text-secondary/60 text-sm line-through md:text-base">
                                LKR {product.labelledPrice.toFixed(2)}
                            </p>
                            <h3 className="text-accent font-sans text-2xl font-semibold md:text-4xl">
                                LKR {product.price.toFixed(2)}
                            </h3>
                        </div>
                        <span className="text-accent self-end font-bold md:self-auto">
                            OFF {product.discount.toFixed(2)}/=
                        </span>
                    </div>

                    <div className="bg-secondary/20 my-5 h-[1px] md:my-9"></div>

                    <div className="mb-6 md:mb-10">
                        <h5 className="mb-2 text-base font-bold md:mb-3 md:text-lg">Description</h5>
                        <p className="mb-5 line-clamp-4 text-justify text-sm md:mb-7 md:line-clamp-5">
                            {product.description}
                        </p>
                    </div>

                    <p className="flex gap-2 text-sm font-bold md:text-base">
                        <span className="text-secondary/60">Warranty:</span>
                        <span className="text-accent">{product.warranty}</span>
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                        onClick={handleAddToCart}
                        className="bg-accent active:bg-accent/70 text-primary flex w-full cursor-pointer items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl py-3 text-sm font-bold tracking-widest uppercase transition duration-100 hover:scale-95 sm:w-[250px] md:text-base"
                    >
                        <ShoppingCart size={20} /> Add To Cart
                    </button>
                    <button
                        onClick={() =>
                            navigate("/checkout", {
                                state: {
                                    products: [
                                        {
                                            productId: product.productId,
                                            image: product.images[0],
                                            productName: product.productName,
                                            quantity: 1,
                                            stock: product.stock,
                                            total: product.price,
                                            unitPrice: product.price,
                                        },
                                    ],
                                },
                            })
                        }
                        className="bg-accent active:bg-accent/70 text-primary flex w-full cursor-pointer items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl py-3 text-sm font-bold tracking-widest uppercase transition duration-100 hover:scale-95 sm:w-[250px] md:text-base"
                    >
                        <ShoppingBag size={20} /> Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};
//{product.description
export default ProductOverView;
