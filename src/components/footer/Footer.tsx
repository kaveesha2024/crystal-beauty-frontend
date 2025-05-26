import React from "react";
import {
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    PhoneIcon,
    MailIcon,
    MapPinIcon,
    CreditCardIcon,
    ShoppingBagIcon,
} from "lucide-react";
export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1e1e19] pt-12 pb-6 text-[#FFEDFA]">
            <div className="container mx-auto px-4">
                <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold text-[#D50B8B]">
                            Crystal Beauty Clear
                        </h2>
                        <p className="mb-4 text-sm opacity-80">
                            Discover the beauty in clarity with our premium cosmetic products
                            designed to enhance your natural radiance.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-[#FFEDFA] transition-colors hover:text-[#D50B8B]"
                            >
                                <InstagramIcon size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-[#FFEDFA] transition-colors hover:text-[#D50B8B]"
                            >
                                <FacebookIcon size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-[#FFEDFA] transition-colors hover:text-[#D50B8B]"
                            >
                                <TwitterIcon size={20} />
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center">
                                <PhoneIcon size={16} className="mr-2 text-[#D50B8B]" />
                                <span>+1 (800) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon size={16} className="mr-2 text-[#D50B8B]" />
                                <span>info@crystalbeautyclear.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPinIcon size={16} className="mt-1 mr-2 text-[#D50B8B]" />
                                <span>
                                    123 Beauty Lane, Suite 100
                                    <br />
                                    Cosmetic City, BC 10001
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
                        <p className="mb-3 text-sm">
                            Subscribe to our newsletter for exclusive offers and beauty tips.
                        </p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="rounded border border-white/20 bg-white/10 px-3 py-2 text-[#FFEDFA] placeholder:text-[#FFEDFA]/60 focus:border-[#D50B8B] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded bg-[#D50B8B] px-4 py-2 text-white transition-colors hover:bg-[#D50B8B]/80"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* Payment Methods */}
                <div className="border-t border-white/10 pt-6 pb-4">
                    <div className="mb-4 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center">
                            <CreditCardIcon size={16} className="mr-1" />
                            <span className="text-xs">Visa</span>
                        </div>
                        <div className="flex items-center">
                            <CreditCardIcon size={16} className="mr-1" />
                            <span className="text-xs">Mastercard</span>
                        </div>
                        <div className="flex items-center">
                            <CreditCardIcon size={16} className="mr-1" />
                            <span className="text-xs">American Express</span>
                        </div>
                        <div className="flex items-center">
                            <CreditCardIcon size={16} className="mr-1" />
                            <span className="text-xs">PayPal</span>
                        </div>
                        <div className="flex items-center">
                            <ShoppingBagIcon size={16} className="mr-1" />
                            <span className="text-xs">Apple Pay</span>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="border-t border-white/10 pt-6 text-center">
                    <div className="flex flex-col items-center justify-between text-xs opacity-70 md:flex-row">
                        <p>
                            © {new Date().getFullYear()} Crystal Beauty Clear. All rights reserved.
                        </p>
                        <div className="mt-2 flex space-x-4 md:mt-0">
                            <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                Privacy Policy
                            </a>
                            <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                Terms of Service
                            </a>
                            <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                Shipping Policy
                            </a>
                            <a href="#" className="transition-colors hover:text-[#D50B8B]">
                                Returns
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
