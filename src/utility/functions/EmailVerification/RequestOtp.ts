import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import axios from "axios";

const requestOtp = async (
    firstName: string,
    otp: number,
    email: string,
    setIsOtpSend: (value: ((prevState: boolean) => boolean) | boolean) => void,
    setMessage: (value: ((prevState: string) => string) | string) => void
) => {
    const res = await emailjs.send(
        "service_3zgefe2",
        "template_j0zm26u",
        {
            firstName,
            otp,
            email,
        },
        "elF_g9pOU4aRlz1HA"
    );
    if (res.status !== 200) {
        toast.error("Something went wrong");
    }
    try {
        const storeOtp = await axios.post("/api/auth/get-otp", {
            email,
            otp,
        });
        if (storeOtp.data.status === 200) {
            setIsOtpSend(true);
            toast.success(storeOtp.data.message);
            setMessage(
                "Your verification code sent to your email. this code is valid for 5 minutes. "
            );
        }
    } catch (err) {
        toast.error("Something went wrong");
    }
};
export default requestOtp;
