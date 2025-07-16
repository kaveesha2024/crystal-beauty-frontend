import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";

const uploadComment = (comment: string, productId: string | undefined) => {
    return async (): Promise<void> => {
        Swal.showLoading();
        if (comment === "") {
            toast.error("Text area is empty 📛");
            return;
        }
        try {
            const response = await axios.post("/api/add_comment", {
                productId,
                comment,
            });
            if (response.data.status === 200) {
                toast.success(response.data.message);
                setTimeout((): void => {
                    window.location.reload();
                }, 1000);
                return;
            }
            toast.success("comment uploaded.");
        } catch (e) {
            Swal.close();
            toast.error("Something went wrong");
            console.log(e);
        }
    };
};
export default uploadComment;
