import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleSignUp from "../google/GoogleSignUp.tsx";
import type { SignInFormProps } from "../../../../utility/types/signIn/signIn";

const SignInForm: React.FC<SignInFormProps> = ({ handleSignInInput, handleSignInSubmit }) => {
    const [showPassword, setShowPassword] = useState(false);
    window.scrollTo(0, 0);
    return (
        <div className="bg-primary flex w-full items-center justify-center px-4 py-12">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-2xl font-bold text-[#1e1e19]">Login</h1>
                    <p className="text-gray-600">Welcome back to CBC</p>
                </div>
                <form onSubmit={handleSignInSubmit} className="space-y-4">
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
                                onChange={handleSignInInput}
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
                                onChange={handleSignInInput}
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
                    <Link
                        className="text-accent block text-end text-sm font-bold underline-offset-2 hover:underline"
                        to={"/forget_password"}
                    >
                        Forget Password ?
                    </Link>
                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-md bg-[#D50B8B] px-4 py-2 text-white transition-colors hover:bg-[#D50B8B]/90 focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2 focus:outline-none"
                    >
                        Sign In
                    </button>
                </form>
                <GoogleSignUp />
                <p className="mt-6 text-center text-sm text-gray-600">
                    <span>Don't' have an account? </span>
                    <Link to="/signup" className="font-medium text-[#D50B8B] hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignInForm;
