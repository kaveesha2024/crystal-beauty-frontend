import React, { useState } from "react";
import {
    UserIcon,
    MailIcon,
    LockIcon,
    PhoneIcon,
    EyeIcon,
    EyeOffIcon,
    NavigationIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import GoogleSignUp from "../google/GoogleSignUp.tsx";
export interface SignupFormProps {
    handleSignupInputFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export const SignupForm: React.FC<SignupFormProps> = ({
    handleSignupInputFields,
    handleSubmit,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#FFEDFA] px-4 py-12">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-2xl font-bold text-[#1e1e19]">Create Account</h1>
                    <p className="text-gray-600">Join Crystal Beauty Clear today</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label
                                className="mb-1 block text-sm font-medium text-[#1e1e19]"
                                htmlFor="firstName"
                            >
                                First Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    onChange={handleSignupInputFields}
                                    className="w-full rounded-md border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                    placeholder="John"
                                    required
                                />
                                <UserIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <label
                                className="mb-1 block text-sm font-medium text-[#1e1e19]"
                                htmlFor="lastName"
                            >
                                Last Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    onChange={handleSignupInputFields}
                                    className="w-full rounded-md border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                    placeholder="Doe"
                                    required
                                />
                                <UserIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-[#1e1e19]"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleSignupInputFields}
                                className="w-full rounded-md border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                placeholder="you@example.com"
                                required
                            />
                            <MailIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-[#1e1e19]"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                onChange={handleSignupInputFields}
                                className="w-full rounded-md border border-gray-200 py-2 pr-12 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                placeholder="••••••••"
                                required
                            />
                            <LockIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-3 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-[#1e1e19]"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={handleSignupInputFields}
                                className="w-full rounded-md border border-gray-200 py-2 pr-12 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                placeholder="••••••••"
                                required
                            />
                            <LockIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute top-1/2 right-3 -translate-y-1/2"
                            >
                                {showConfirmPassword ? (
                                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-[#1e1e19]"
                            htmlFor="phoneNumber"
                        >
                            Phone Number{" "}
                            <span className="text-black/30">
                                (Please give a valid phone number to get the shipping info !)
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={handleSignupInputFields}
                                className="w-full rounded-md border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                placeholder="0771234567"
                                required
                            />
                            <PhoneIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-[#1e1e19]"
                            htmlFor="phone"
                        >
                            Home Address{" "}
                            <span className="text-black/30">
                                (This address will be used for shipping !)
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="address"
                                name="address"
                                onChange={handleSignupInputFields}
                                className="w-full rounded-md border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#D50B8B] focus:outline-none"
                                placeholder="No 02, Colombo, Sri Lanka"
                                required
                            />
                            <NavigationIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-md bg-[#D50B8B] px-4 py-2 text-white transition-colors hover:bg-[#D50B8B]/90 focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2 focus:outline-none"
                    >
                        Create Account
                    </button>
                </form>
                <GoogleSignUp />
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?
                    <Link to="/signin" className="font-medium text-[#D50B8B] hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};
