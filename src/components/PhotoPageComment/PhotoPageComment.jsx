import "./PhotoPageComment.scss";
import React from "react";

function PhotoPageComment({ comments }) {
  return (
    <div className="comments">
      <p className="comments__header">
        {comments.length} {`Comment${comments.length > 1 ? "s" : ""}`}
      </p>
      {comments.map((comment) => (
        <div key={comment.id} className="comments__list">
          <div className="comments__top">
            <p className="comments__top-item">{comment.name}</p>{" "}
            <p className="comments__top-item">
              {new Date(comment.timestamp).toLocaleDateString()}
            </p>
          </div>
          <p className="comments__bottom">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotoPageComment;
