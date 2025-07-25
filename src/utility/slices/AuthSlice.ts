import { createSlice } from "@reduxjs/toolkit";
import signupApi from "../apiCalls/SignupApi.ts";
import toast from "react-hot-toast";
import type { IAuthSliceInitialStateTypes } from "../types/slices/authSlice";
import signInApi from "../apiCalls/SignInApi.ts";
import setUserState from "../commonFunctions/setAuthState/setAuthState.ts";
import GoogleSignUpApi from "../apiCalls/GoogleSignUpApi.ts";

const initialState: IAuthSliceInitialStateTypes = {
    isLoading: false,
    isAuthenticated: false,
    token: "",
    firstName: "",
    lastName: "",
    userId: "",
    isVerified: false,
    email: "",
    phoneNumber: "",
    address: "",
    profilePicture: "",
    role: "",
    isBlocked: false,
};

const authenticationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOut: (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.token = "";
            state.firstName = "";
            state.lastName = "";
            state.isVerified = false;
            state.email = "";
            state.phoneNumber = "";
            state.userId = "";
            state.address = "";
            state.profilePicture = "";
            state.role = "";
        },
        verifyEmail: (state: IAuthSliceInitialStateTypes) => {
            state.isVerified = true;
        },
    },
    extraReducers: builder => {
        builder.addCase(signupApi.pending, (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = true;
        });
        builder.addCase(signupApi.fulfilled, (state: IAuthSliceInitialStateTypes, { payload }) => {
            state.isLoading = false;
            if (payload.status === 200) {
                setUserState(state, payload);
                toast.success("Your CBC account created successfully");
            } else {
                toast.error(payload.message);
            }
        });
        builder.addCase(signupApi.rejected, (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            toast.error("Error Occurred");
        });
        builder.addCase(signInApi.pending, (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = true;
        });
        builder.addCase(signInApi.fulfilled, (state: IAuthSliceInitialStateTypes, { payload }) => {
            setUserState(state, payload);
            state.isLoading = false;
        });
        builder.addCase(signInApi.rejected, (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            toast.error("Error Occurred");
        });
        builder.addCase(GoogleSignUpApi.pending, (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = true;
        });
        builder.addCase(
            GoogleSignUpApi.fulfilled,
            (state: IAuthSliceInitialStateTypes, { payload }) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                setUserState(state, payload);
            }
        );
        builder.addCase(GoogleSignUpApi.rejected, (state: IAuthSliceInitialStateTypes) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            toast.error("Error Occurred");
        });
    },
});

export default authenticationSlice.reducer;
export const { signOut, verifyEmail } = authenticationSlice.actions;
