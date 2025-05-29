import React, { useEffect, useState } from "react";
import { inputClassName } from "../../../utility/others/refactor.ts";
import { SendIcon } from "lucide-react";

interface IVerifyEmailFormPropTypes {
    sendOtp: () => void;
    handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void;
    message: string;
    email: string;
}
const VerifyEmailForm: React.FC<IVerifyEmailFormPropTypes> = ({
    sendOtp,
    message,
    handleInputField,
    email,
}) => {
    const [isOtpSend, setIsOtpSend] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setIsOtpSend(false);
            console.log("hee");
        }, 5 * 60 * 1000);
    }, [isOtpSend]);
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
                                setIsOtpSend(true);
                            }}
                            className={isOtpSend ? "cursor-not-allowed" : "cursor-pointer"}
                        >
                            <SendIcon />
                        </button>
                    )}
                </div>
                <button
                    type="button"
                    className="bg-accent text-primary active:bg-primary border-accent active:text-accent mt-8 cursor-pointer rounded-sm px-4 py-2 font-bold active:border-2"
                >
                    Verify
                </button>
            </form>
        </div>
    );
};

export default VerifyEmailForm;
