import {EyeIcon, EyeOffIcon, LockIcon, MailIcon} from "lucide-react";
import React, { useState } from "react";
import {Link} from "react-router-dom";

const SignInForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full min-h-screen bg-[#FFEDFA] flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#1e1e19] mb-2">
                        Login
                    </h1>
                    <p className="text-gray-600">Welcome back to CBC</p>
                </div>
                <form className="space-y-4">

                    <div>
                        <label
                            className="block text-sm font-medium text-[#1e1e19] mb-1"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                // onChange={}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                                placeholder="you@example.com"
                                required
                            />
                            <MailIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-[#1e1e19] mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                // onChange={}
                                className="w-full pl-10 pr-12 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                                placeholder="••••••••"
                                required
                            />
                            <LockIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <EyeIcon className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#D50B8B] text-white py-2 px-4 rounded-md hover:bg-[#D50B8B]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't' have an account?
                    <Link to="/signup" className="text-[#D50B8B] hover:underline font-medium">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignInForm;