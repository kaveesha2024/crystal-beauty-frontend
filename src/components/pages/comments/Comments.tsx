import React, { useState } from "react";
import CommentSection from "./CommentSection.tsx";
import { useParams } from "react-router-dom";
import uploadComment from "./uploadComment.ts";

const Comments: React.FC = () => {
    const { id: productId } = useParams();
    const [comment, setComment] = useState<string>("");
    const handleCommentInputField = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setComment(event.target.value);
    };
    const handleUploadComment = uploadComment(comment, productId);
    // const getComments = async (): Promise<void> => {
    //     await axios.get('/api/get_orders_by_product_id');
    // }
    return (
        <CommentSection
            handleCommentInputField={handleCommentInputField}
            handleUploadComment={handleUploadComment}
        />
    );
};

export default Comments;
