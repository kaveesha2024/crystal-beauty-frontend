import React from "react";

export interface ICommentSectionPropTypes {
    handleCommentInputField: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleUploadComment: () => void;
}
