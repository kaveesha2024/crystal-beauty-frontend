import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import type { IForgetPasswordSection } from "../../../../utility/types/forgetPassword/forgetPassword";

const ForgetPasswordSection: React.FC<IForgetPasswordSection> = ({
    checkEmailAlreadySignUp,
    handleEmailField,
    isOtpSend,
    handleForgetPasswordInputDetails,
    isForgetPasswordInputDetailsNull,
    resetPassword,
}) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="flex w-full justify-center py-10 select-none">
            <div className="flex w-[95%] flex-col gap-5 rounded-4xl bg-white px-10 py-5 shadow-2xl md:w-[500px] md:rounded-4xl">
                <div className="flex w-full flex-col items-center justify-center">
                    <img className="h-[200px] w-[200px]" src="/forget-password.svg" alt="" />
                    <h1 className="mt-5 text-2xl font-extrabold tracking-widest">Reset Password</h1>
                    <p className="text-secondary/50 text-center font-thin tracking-wider">
                        Please verify your email address first
                    </p>
                </div>
                <div>
                    <form className="flex flex-col gap-5" onSubmit={checkEmailAlreadySignUp}>
                        {!isOtpSend && (
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-2 font-bold tracking-wide">
                                    Email
                                </label>
                                <input
                                    onChange={handleEmailField}
                                    className="outline-accent w-full rounded-4xl border border-black/30 px-5 py-2 focus:border-none focus:outline-2"
                                    type="email"
                                    id={"email"}
                                    placeholder={"e.g: example@test.com"}
                                    required={!isOtpSend}
                                />
                            </div>
                        )}
                        {isOtpSend && (
                            <div className={"flex flex-col gap-5"}>
                                <div className="flex flex-col">
                                    <label htmlFor="otp" className="mb-2 font-bold tracking-wide">
                                        OTP
                                    </label>
                                    <input
                                        onChange={handleForgetPasswordInputDetails}
                                        className="outline-accent w-full rounded-4xl border border-black/30 px-5 py-2 text-center tracking-[20px] focus:border-none focus:outline-2"
                                        type="text"
                                        maxLength={6}
                                        id={"otp"}
                                        placeholder={"123456"}
                                        name={"otp"}
                                        required={isOtpSend}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="newPassword"
                                        className="mb-2 font-bold tracking-wide"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        onChange={handleForgetPasswordInputDetails}
                                        className="outline-accent w-full rounded-4xl border border-black/30 px-5 py-2 focus:border-none focus:outline-2"
                                        type="password"
                                        id={"newPassword"}
                                        name={"newPassword"}
                                        placeholder={"***********"}
                                        required={isOtpSend}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="confirmNewPassword"
                                        className="mb-2 font-bold tracking-wide"
                                    >
                                        Confirm New Password
                                    </label>
                                    <input
                                        onChange={handleForgetPasswordInputDetails}
                                        className="outline-accent w-full rounded-4xl border border-black/30 px-5 py-2 focus:border-none focus:outline-2"
                                        type="password"
                                        name={"confirmNewPassword"}
                                        id={"confirmNewPassword"}
                                        placeholder={"***********"}
                                        required={isOtpSend}
                                    />
                                </div>
                            </div>
                        )}
                        {isOtpSend ? (
                            <button
                                type={"button"}
                                disabled={isForgetPasswordInputDetailsNull()}
                                onClick={resetPassword}
                                className={`bg-accent text-primary active:text-accent mt-2 w-full rounded-4xl p-2 font-bold active:bg-white ${isForgetPasswordInputDetailsNull() ? "cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                Change Password
                            </button>
                        ) : (
                            <button
                                type={"submit"}
                                className="bg-accent text-primary active:text-accent mt-2 w-full cursor-pointer rounded-4xl p-2 font-bold active:bg-white"
                            >
                                Submit
                            </button>
                        )}
                    </form>
                    {!isOtpSend && (
                        <button
                            type={"button"}
                            onClick={() => navigate("/signin")}
                            className="mt-10 flex w-full cursor-pointer items-center justify-center gap-3 p-2"
                        >
                            <MdOutlineArrowBackIos /> Back to Login
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgetPasswordSection;
