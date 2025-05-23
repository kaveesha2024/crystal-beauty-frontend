import { createSlice } from "@reduxjs/toolkit";
interface IAuthSliceInitialStateTypes {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicture: string;
  role: string;
}

const initialState: IAuthSliceInitialStateTypes = {
  token: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  profilePicture: "",
  role: "",
};
const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
export default authenticationSlice.reducer;
