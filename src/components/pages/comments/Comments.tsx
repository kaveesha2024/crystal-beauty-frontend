import React, { useEffect, useState } from "react";
import CommentSection from "./CommentSection.tsx";
import { useParams } from "react-router-dom";
import uploadComment from "./uploadComment.ts";
import GetCommentsByProductIdApi from "./GetCommentsByProductIdApi.ts";
import toast from "react-hot-toast";
import type { IAllCommentsType } from "../../../utility/types/comments/comment";
import axios from "axios";

const Comments: React.FC = () => {
    const { id: productId } = useParams();
    const [comment, setComment] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect((): void => {
        if (isLoading) {
            getComments();
            setIsLoading(false);
        }
    }, [isLoading]);
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
    const deleteComment = async (index: string): Promise<void> => {
        const response = await axios.delete(`/api/delete_comment_by_id/?commentId=${index}`);
        if (response.data.status === 200) {
            setIsLoading(true);
            return;
        }
        toast.error(response.data.message);
    };
    return (
        <CommentSection
            handleCommentInputField={handleCommentInputField}
            handleUploadComment={handleUploadComment}
            allComments={allComments}
            deleteComment={deleteComment}
        />
    );
};

export default Comments;
