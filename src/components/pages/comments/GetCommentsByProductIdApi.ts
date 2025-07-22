import axios from "axios";

const GetCommentsByProductIdApi = async (productId: string | undefined) => {
    try {
        const response = await axios.get(`/api/get_comments_by_product_id/?productId=${productId}`);
        return response.data;
    } catch (e) {
        return null;
    }
};
export default GetCommentsByProductIdApi;
