import type {
    IAuthSliceInitialStateTypes,
    IAuthSlicePayloadTypes,
} from "../../types/slices/authSlice";

const setUserState = (state: IAuthSliceInitialStateTypes, payload: IAuthSlicePayloadTypes) => {
    state.token = payload.token;
    state.firstName = payload.user?.firstName || "";
    state.lastName = payload.user?.lastName || "";
    state.isAuthenticated = true;
    state.isVerified = payload.user?.isVerified || false;
    state.email = payload.user?.email || "";
    state.phoneNumber = payload.user?.phoneNumber || "";
    state.address = payload.user?.address || "";
    state.profilePicture = payload.user?.profilePicture || "";
    state.role = payload.user?.role || "";
    state.isBlocked = payload.user?.isBlocked || false;
};
export default setUserState;
