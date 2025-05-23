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
    <footer className="bg-[#1e1e19] text-[#FFEDFA] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#D50B8B]">
              Cristal Beauty Clear
            </h2>
            <p className="mb-4 text-sm opacity-80">
              Discover the beauty in clarity with our premium cosmetic products
              designed to enhance your natural radiance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#FFEDFA] hover:text-[#D50B8B] transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-[#FFEDFA] hover:text-[#D50B8B] transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-[#FFEDFA] hover:text-[#D50B8B] transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#D50B8B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D50B8B] transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D50B8B] transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D50B8B] transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D50B8B] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D50B8B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <PhoneIcon size={16} className="mr-2 text-[#D50B8B]" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={16} className="mr-2 text-[#D50B8B]" />
                <span>info@cristalbeautyclear.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon size={16} className="mr-2 mt-1 text-[#D50B8B]" />
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
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for exclusive offers and beauty tips.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 rounded bg-white/10 border border-white/20 text-[#FFEDFA] placeholder:text-[#FFEDFA]/60 focus:outline-none focus:border-[#D50B8B]"
              />
              <button
                type="submit"
                className="bg-[#D50B8B] hover:bg-[#D50B8B]/80 text-white py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="border-t border-white/10 pt-6 pb-4">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
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
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
            <p>
              © {new Date().getFullYear()} Cristal Beauty Clear. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-[#D50B8B] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D50B8B] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D50B8B] transition-colors">
                Shipping Policy
              </a>
              <a href="#" className="hover:text-[#D50B8B] transition-colors">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
