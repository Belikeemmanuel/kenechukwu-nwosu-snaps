import "./PhotoPageComment.scss";
import React from "react";

function PhotoPageComment({ comments }) {
  return (
    <div className="comments">
      <p className="comments__header">
        {comments.length} {`Comment${comments.length > 1 ? "s" : ""}`}
      </p>
      {comments.map((comment, index) => (
        <div key={comment.id || index} className="comments__list">
          <div className="comments__top">
            <p className="comments__top-item">{comment.name}</p>{" "}
            <p className="comments__top-item">
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <p className="comments__bottom">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotoPageComment;
