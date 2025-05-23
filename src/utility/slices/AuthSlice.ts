import { createSlice } from "@reduxjs/toolkit";
import signupApi from "../apiCalls/SignupApi.ts";
import toast from "react-hot-toast";
interface IAuthSliceInitialStateTypes {
  token: string;
  firstName: string;
  lastName: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicture: string;
  role: string;
  errState: string;
  isVerified: boolean;
}
const initialState: IAuthSliceInitialStateTypes = {
  isLoading: false,
  isAuthenticated: false,
  token: "",
  firstName: "",
  lastName: "",
  isVerified: false,
  email: "",
  phoneNumber: "",
  address: "",
  profilePicture: "",
  role: "",
  errState: "",
};
const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupApi.pending, (state: IAuthSliceInitialStateTypes) => {
      state.isLoading = true;
    });
    builder.addCase(
      signupApi.fulfilled,
      (state: IAuthSliceInitialStateTypes, action) => {
        state.isLoading = false;
        const { payload } = action;
        console.log(payload);
        if (payload.status === 200) {
          state.token = payload.token;
          state.firstName = payload.user?.firstName;
          state.lastName = payload.user?.lastName;
          state.isAuthenticated = true;
          state.isVerified = payload.user?.isVerified;
          state.email = payload.user?.email;
          state.phoneNumber = payload.user?.phoneNumber;
          state.address = payload.user?.address;
          state.profilePicture = payload.user?.profilePicture;
          state.role = payload.user?.role;
          toast.success("Your CBC account created successfully");
          return;
        }
        state.errState = payload.message;
      },
    );
    builder.addCase(
      signupApi.rejected,
      (state: IAuthSliceInitialStateTypes) => {
        state.isLoading = false;
        toast.error("Error Occurred");
        state.isAuthenticated = false;
      },
    );
  },
});
export default authenticationSlice.reducer;
