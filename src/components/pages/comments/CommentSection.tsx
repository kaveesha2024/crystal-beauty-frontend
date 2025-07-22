import React from "react";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store.ts";
import type { ICommentSectionPropTypes } from "../../../utility/types/comments/comment";

// Dummy data for comments
const dummyComments = [
    {
        id: 1,
        firstName: "Sarah",
        lastName: "Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
        comment: "This lipstick is amazing! The color lasts all day without drying my lips.",
        date: "2023-05-15",
    },
    {
        id: 2,
        firstName: "Michael",
        lastName: "Chen",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        comment: "I bought this for my wife and she absolutely loves it. Great quality!",
        date: "2023-05-18",
    },
    {
        id: 3,
        firstName: "Emily",
        lastName: "Rodriguez",
        profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
        comment: "The foundation matches my skin tone perfectly. Highly recommend!",
        date: "2023-05-20",
    },
    {
        id: 4,
        firstName: "David",
        lastName: "Kim",
        profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
        comment: "The eyeshadow palette has such vibrant colors. Worth every penny!",
        date: "2023-05-22",
    },
];

const CommentSection: React.FC<ICommentSectionPropTypes> = ({
    handleCommentInputField,
    handleUploadComment,
}) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.authentication);
    const [comments, setComments] = React.useState(dummyComments);

    // Function to handle comment deletion
    const handleDeleteComment = (commentId: number) => {
        setComments(comments.filter(comment => comment.id !== commentId));
    };
    return (
        <div className="mx-auto max-w-2xl p-6">
            <h2 className={`text-accent mb-6 text-2xl font-bold`}>Customer Reviews</h2>

            <div className="space-y-6">
                {comments.length <= 0 ? (
                    <div className="select-none` font-bold tracking-widest">No Reviews yet</div>
                ) : (
                    comments.map(comment => (
                        <div
                            key={comment.id}
                            className="flex gap-4 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg"
                        >
                            {/* User Avatar */}
                            <div className="flex-shrink-0">
                                <img
                                    src={comment.profilePic}
                                    alt={`${comment.firstName} ${comment.lastName}`}
                                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
                                />
                            </div>

                            {/* Comment Content */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {comment.firstName} {comment.lastName}
                                        </h4>
                                        <span className="text-xs text-gray-500">
                                            {new Date(comment.date).toLocaleDateString()}
                                        </span>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteComment(comment.id)}
                                        className={`text-accent hover:text-accent cursor-pointer transition-colors`}
                                        aria-label="Delete comment"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                                <p className="mt-2 text-gray-700">{comment.comment}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add new comment form (optional) */}
            <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className={`text-accent mb-4 text-lg font-semibold`}>Add Your Review</h3>
                <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-pink-500"
                    rows={4}
                    onChange={handleCommentInputField}
                    placeholder="Share your thoughts about this product..."
                ></textarea>
                {!isAuthenticated && <div className="text-red-500">You haven't sign in yet !</div>}
                <button
                    disabled={!isAuthenticated}
                    onClick={handleUploadComment}
                    className={`bg-accent hover:bg-accent mt-3 rounded-lg px-6 py-2 text-white transition-colors ${!isAuthenticated ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                    Submit Review
                </button>
            </div>
        </div>
    );
};

export default CommentSection;
