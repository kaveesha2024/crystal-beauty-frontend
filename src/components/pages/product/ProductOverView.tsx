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
    // window.scrollTo(0, 0);
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
        <div className="mb-5 flex h-[90vh] w-full items-center justify-center gap-5 px-20 py-10">
            <div className="relative h-[620px] w-[50%] bg-white pt-5">
                <div className="absolute top-5 right-5">
                    <Heart />
                </div>
                <div className="flex h-[450px] items-center justify-center">
                    <img src={currentPicture} className="h-[450px] w-[450px]" alt="image" />
                </div>
                <div className="flex h-[150px] items-center justify-center gap-5 overflow-x-auto">
                    {product.images?.map((image: string, index: number) => (
                        <img
                            onClick={(): void => setCurrentPicture(image)}
                            className={
                                "h-[120px] w-[120px] cursor-pointer object-cover transition duration-300 hover:scale-95" +
                                (currentPicture === image ? " outline-accent outline-4" : "")
                            }
                            key={index}
                            src={image}
                            alt="product"
                        />
                    ))}
                </div>
            </div>
            <div className="flex h-[620px] w-[50%] flex-col justify-between bg-white px-5 py-5 pb-20">
                <div className="mb-10 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <p className="spaced mb-8 text-sm font-bold uppercase">{product.brand}</p>
                        <p className="text-secondary/20 mb-3 text-sm">{product.productId}</p>
                    </div>
                    <div className="mb-5 text-center">
                        <h2 className="font-serif text-4xl font-bold">{product.productName}</h2>
                        {product.alterNames.length > 0 &&
                            product.alterNames.map((name: string, index: number) => (
                                <span className="text-secondary/40" key={index}>
                                    {name} /
                                </span>
                            ))}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-end gap-3">
                            <p className="text-secondary/60 ml-2 line-through">
                                LKR {product.labelledPrice.toFixed(2)}
                            </p>
                            <h3 className="text-accent font-sans text-4xl font-semibold">
                                LKR {product.price.toFixed(2)}
                            </h3>
                        </div>
                        <span className="text-accent flex items-end font-bold">
                            OFF {product.discount.toFixed(2)}/=
                        </span>
                    </div>
                    <div className="bg-secondary/20 my-9 h-[1px]"></div>
                    <div className="mb-10">
                        <h5 className="mb-3 text-lg font-bold">Description</h5>
                        <p className="mb-7 line-clamp-4 text-justify text-sm">
                            {product.description}
                        </p>
                    </div>
                    <p className="flex gap-2 font-bold">
                        <span className="text-secondary/60">Warranty:</span>
                        <span className="text-accent">{product.warranty}</span>
                    </p>
                </div>
                <div className="flex justify-evenly gap-5">
                    <button
                        onClick={handleAddToCart}
                        className="bg-accent active:bg-accent/70 text-primary flex w-[250px] cursor-pointer items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl py-2 font-bold tracking-widest uppercase transition duration-100 hover:scale-95"
                    >
                        <ShoppingCart /> Add To Cart
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
                        className="bg-accent active:bg-accent/70 te text-primary flex w-[250px] cursor-pointer items-center justify-center gap-2 rounded-tl-2xl rounded-br-2xl py-2 font-bold tracking-widest uppercase transition duration-100 hover:scale-95"
                    >
                        <ShoppingBag /> Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};
//{product.description
export default ProductOverView;
