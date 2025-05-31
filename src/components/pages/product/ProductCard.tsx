import React from "react";

interface IProductCardPropsTypes {
    price: number;
    labelledPrice: number;
    discount: number;
    brand: string;
    productName: string;
    description: string;
    image: string;
}
const ProductCard: React.FC<IProductCardPropsTypes> = ({
    price,
    labelledPrice,
    discount,
    brand,
    productName,
    description,
    image,
}) => {
    return (
        <div className="xl relative mt-5 h-[500px] w-[300px] rounded-sm bg-white transition duration-100 select-none">
            <div className="group relative h-[230px] w-full cursor-pointer overflow-hidden rounded-t-sm">
                <img
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    src={image}
                    alt="Product image"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                    <div className="flex translate-y-4 flex-col items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-white">
                                LKR {price.toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-300 line-through">
                                LKR {labelledPrice.toFixed(2)}
                            </span>
                        </div>
                        <span className="mt-1 text-xs font-medium text-green-300">
                            SAVE LKR {discount.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between p-4 text-center">
                <h6 className="spaced mt-5 line-clamp-1 text-[10px] uppercase">{brand}</h6>
                <h2 className="my-3 line-clamp-2 w-[70%] font-serif text-4xl font-bold">
                    {productName}
                </h2>
                <div className="bg-secondary mb-3 h-[1px] w-[30px]"></div>
                <p className="mb-3 line-clamp-2 text-center text-xs">{description}</p>
                <button className="bg-secondary text-primary spaced active:text-secondary cursor-pointer rounded-tl-2xl rounded-br-2xl px-4 py-[7px] text-[7px] tracking-widest uppercase transition duration-100 outline-none hover:scale-105">
                    View Product
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
