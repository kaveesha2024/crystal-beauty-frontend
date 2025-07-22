import axios from "axios";
import toast from "react-hot-toast";

const CheckEmailAlreadySignUpApi = async (email: string) => {
    try {
        const response = await axios.post("/api/reset_password/send_otp", { email });
        if (response.data.status === 200) {
            return response.data.message;
        }
        toast.error(response.data.message);
        return null;
    } catch (e) {
        console.log(e);
        return null;
    }
};
export default CheckEmailAlreadySignUpApi;
