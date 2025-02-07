"use client";
import React, { useState } from "react";
interface Comment {
  id: number;
  username: string;
  avatar: string;
  text: string;
}
const CommentSection = () => {
  const initailComment: Comment[] = [
    {
      id: 1,
      username: "Alex Nelson",
      avatar: "/avatar.jpg",
      text: "Awesome post! I really enjoyed reading it.",
    },
    {
      id: 2,
      username: "Joyce Parker",
      avatar: "/avatar02.jpg",
      text: "Thanks for sharing this helpful information!",
    },
  ];

  const [comments, setComments] = useState<Comment[]>(initailComment);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newId = comments.length + 1;
      const randomAvatar = `https://i.pravatar.cc/40?img=${newId}`;
      const newCommentObj: Comment = {
        id: newId,
        username: `User${newId}`,
        avatar: randomAvatar,
        text: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (id: number) => {
    const updateComment = comments.filter((comment) => comment.id !== id);
    setComments(updateComment);
  };
  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">Comments</h2>

        {/* Comment List */}
        <div className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg shadow-md relative"
              >
                {/* Avatar */}
                <img
                  src={comment.avatar}
                  alt={comment.username}
                  className="w-10 h-10 rounded-full border-2 border-gray-700"
                />
                {/* Comment Content */}
                <div>
                  <h4 className="font-semibold text-gray-200">
                    {comment.username}
                  </h4>
                  <p className="text-gray-400 mt-1">{comment.text}</p>
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>

        {/* Add Comment Form */}
        <div className="mt-8 flex items-center space-x-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-700 bg-gray-900 text-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md"
          >
            Post
          </button>
        </div>
      </section>
    </>
  );
};

export default CommentSection;
