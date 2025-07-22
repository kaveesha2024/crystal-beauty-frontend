import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import type { dispatchType } from "../../../../../store.ts";
import GoogleSignUpApi from "../../../../utility/apiCalls/GoogleSignUpApi.ts";

const GoogleSignUp: React.FC = () => {
    const dispatch = useDispatch<dispatchType>();
    const loginWithGoogle = useGoogleLogin({
        onSuccess: async res => {
            dispatch(GoogleSignUpApi(res.access_token));
        },
    });
    return (
        <div>
            <button
                onClick={() => loginWithGoogle()}
                className="hover:bg-accent/30 mt-2 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md py-2"
                disabled={true}
            >
                <FcGoogle className="text-xl" /> Login with Google
            </button>
        </div>
    );
};

export default GoogleSignUp;
