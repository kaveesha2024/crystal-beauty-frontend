import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import type { dispatchType } from "../../../../../store.ts";
import GoogleSignUpApi from "../../../../utility/apiCalls/GoogleSignUpApi.ts";

const GoogleSignUp: React.FC = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch<dispatchType>();
    const loginWithGoogle = useGoogleLogin({
        onSuccess: async res => {
            // try {
            //     console.log("google");
            //     const response = await axios.post(
            //         `/api/auth/google/?accessToken=${res.access_token}`
            //     );
            //     if (response.data.status === 422) {
            //         navigate("/signin");
            //         return;
            //     }
            // } catch (error) {
            //     toast.error("Something went wrong!");
            //     console.log(error);
            // }
            dispatch(GoogleSignUpApi(res.access_token));
        },
    });
    return (
        <div>
            <button
                onClick={() => loginWithGoogle()}
                className="hover:bg-accent/30 mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md py-2"
            >
                <FcGoogle className="text-xl" /> Sign up with Google
            </button>
        </div>
    );
};

export default GoogleSignUp;
