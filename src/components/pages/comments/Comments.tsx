import React, { useEffect, useState } from "react";
import CommentSection from "./CommentSection.tsx";
import { useParams } from "react-router-dom";
import uploadComment from "./uploadComment.ts";
import GetCommentsByProductIdApi from "./GetCommentsByProductIdApi.ts";
import toast from "react-hot-toast";
import type { IAllCommentsType } from "../../../utility/types/comments/comment";

const Comments: React.FC = () => {
    const { id: productId } = useParams();
    const [comment, setComment] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        if (isLoading) {
            getComments();
            setIsLoading(false);
        }
    }, []);
    const [allComments, setAllComments] = useState<IAllCommentsType[]>([]);
    const handleCommentInputField = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setComment(event.target.value);
    };
    const handleUploadComment = uploadComment(comment, productId);
    const getComments = async (): Promise<void> => {
        const response = await GetCommentsByProductIdApi(productId);
        if (response.status === 200) {
            setAllComments(response.message);
            return;
        }
        toast.error(response.message);
    };
    return (
        <CommentSection
            handleCommentInputField={handleCommentInputField}
            handleUploadComment={handleUploadComment}
            allComments={allComments}
        />
    );
};

export default Comments;
