import React from "react";
import { inputClassName } from "../../../utility/others/refactor.ts";
import { SendIcon } from "lucide-react";
import type { IVerifyEmailFormPropTypes } from "../../../utility/types/verify/verify";

const VerifyEmailForm: React.FC<IVerifyEmailFormPropTypes> = ({
    sendOtp,
    message,
    handleInputField,
    email,
    isOtpSend,
    verifyEmailAddress,
    handleOtpInputData,
}) => {
    // const [isOtpSend, setIsOtpSend] = useState<boolean>(false);

    return (
        <div className="mt-20 flex h-[70vh] justify-center">
            <form>
                <p className="text-green-400">{message}</p>
                <div className="flex w-[600px] items-center justify-center gap-4">
                    <input
                        type="email"
                        name="email"
                        className={inputClassName}
                        onChange={handleInputField}
                        placeholder={"Email Address"}
                        defaultValue={email}
                    />
                    {email && (
                        <button
                            type="button"
                            disabled={isOtpSend}
                            onClick={() => {
                                sendOtp();
                            }}
                            className={isOtpSend ? "cursor-not-allowed" : "cursor-pointer"}
                        >
                            <SendIcon />
                        </button>
                    )}
                </div>
                {isOtpSend && (
                    <div className="mt-4 flex w-50 gap-4">
                        <input
                            type="text"
                            name={"otpInput"}
                            onChange={handleOtpInputData}
                            className={inputClassName}
                            placeholder="OTP"
                        />
                        <button
                            type="button"
                            onClick={() => verifyEmailAddress()}
                            className="outline-accent cursor-pointer rounded-md px-4 py-2 transition active:outline-2"
                        >
                            Verify
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default VerifyEmailForm;
