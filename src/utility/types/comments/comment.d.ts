import React from "react";

export interface ICommentSectionPropTypes {
    handleCommentInputField: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleUploadComment: () => void;
    allComments: IAllCommentsType[];
}
export interface IAllCommentsType {
    comment: string;
    firstName: string;
    lastName: string;
    productId: string;
    profilePicture: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    _id: string;
}
