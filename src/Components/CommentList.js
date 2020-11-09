import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((el) => (
        <Comment comment={el} />
      ))}
    </div>
  );
}

export default CommentList;
