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
export interface SignupFormProps {
  handleSignupInputFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // (event: React.FormEvent<HTMLFormElement>)
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export const SignupForm: React.FC<SignupFormProps> = ({
  handleSignupInputFields,
  handleSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="w-full min-h-screen bg-[#FFEDFA] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1e1e19] mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Join Cristal Beauty Clear today</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-[#1e1e19] mb-1"
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                  placeholder="John"
                  required
                />
                <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#1e1e19] mb-1"
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                  placeholder="Doe"
                  required
                />
                <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
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
                onChange={handleSignupInputFields}
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
                onChange={handleSignupInputFields}
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
          <div>
            <label
              className="block text-sm font-medium text-[#1e1e19] mb-1"
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
                className="w-full pl-10 pr-12 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                placeholder="••••••••"
                required
              />
              <LockIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="w-5 h-5 text-gray-400" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-[#1e1e19] mb-1"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                placeholder="0771234567"
                required
              />
              <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-[#1e1e19] mb-1"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:border-transparent"
                placeholder="No 02, Colombo, Sri Lanka"
                required
              />
              <NavigationIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#D50B8B] text-white py-2 px-4 rounded-md hover:bg-[#D50B8B]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D50B8B] focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-[#D50B8B] hover:underline font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};
