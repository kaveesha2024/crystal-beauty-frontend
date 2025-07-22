import type { IForgetPasswordInputDetailsTypes } from "../../../../utility/types/forgetPassword/forgetPassword";
import type { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const ResetPasswordEndpointCall = (
    forgetPasswordInputDetails: IForgetPasswordInputDetailsTypes,
    navigate: NavigateFunction
) => {
    return async (): Promise<void> => {
        if (
            forgetPasswordInputDetails.newPassword !== forgetPasswordInputDetails.confirmNewPassword
        ) {
            toast.error("Confirm password is incorrect");
            return;
        }
        try {
            Swal.showLoading();
            const response = await axios.post("/api/reset_password", forgetPasswordInputDetails);
            Swal.close();
            if (response.data.status === 200) {
                navigate("/signin");
                await Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your password changed successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return;
            }
            toast.error(response.data.message);
        } catch (e) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };
};
export default ResetPasswordEndpointCall;
