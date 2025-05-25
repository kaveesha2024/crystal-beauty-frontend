import React, { useEffect, useState } from "react";
import SignInForm from "./SignInForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import SignInApi from "../../../../utility/apiCalls/SignInApi.ts";
import type { dispatchType, RootState } from "../../../../../store.ts";
import type { ISignInInputDetailsTypes } from "../../../../utility/types/signIn/signIn";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
    const { isAuthenticated, role } = useSelector((state: RootState) => state.authentication);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated && role === "admin") {
            navigate('/dashboard');
            return;
        }
        if (isAuthenticated && role === "user") {
            navigate('/');
            return;
        }
    }, [isAuthenticated, role])
    const dispatch = useDispatch<dispatchType>();
    const [signInInputDetails , setSignInInputDetails ] = useState<ISignInInputDetailsTypes>({
        email: '',
        password: ''
    });
    const handleSignInInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSignInInputDetails({
            ...signInInputDetails,
            [name]: value
        });
    };
    const handleSignInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(SignInApi(signInInputDetails));
    };
    return <SignInForm handleSignInInput={handleSignInInput} handleSignInSubmit={handleSignInSubmit} />;
};

export default SignIn;
