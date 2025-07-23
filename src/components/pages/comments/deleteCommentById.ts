import axios from "axios";
import toast from "react-hot-toast";

const deleteCommentById = (
    setIsLoading: (value: ((prevState: boolean) => boolean) | boolean) => void
) => {
    return async (index: string): Promise<void> => {
        const response = await axios.delete(`/api/delete_comment_by_id/?commentId=${index}`);
        if (response.data.status === 200) {
            setIsLoading(true);
            return;
        }
        toast.error(response.data.message);
    };
};
export default deleteCommentById;
