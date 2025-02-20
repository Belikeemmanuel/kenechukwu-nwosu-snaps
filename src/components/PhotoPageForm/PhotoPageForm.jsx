import { useState } from "react";
import axios from "axios";
import "./PhotoPageForm.scss";

function PhotoPageForm({ id, comments, setComments }) {
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    setNameError(false);
    setCommentError(false);
    setError("");

    if (!name.trim()) {
      setNameError(true);
      setError("Please fill out the name field.");
      return;
    }

    if (!newComment.trim()) {
      setCommentError(true);
      setError("Please fill out the comment field.");
      return;
    }

    try {
      const response = await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=29091757-a36d-414d-8964-138221113fb6`,
        {
          comment: newComment,
          name: name,
        }
      );
      setComments([response.data, ...comments]);
      setNewComment("");
      setName("");
    } catch (error) {
      console.error("Error posting comment:", error);
      setError("An error occurred while submitting the comment.");
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className="form">
      <label className="form__name">
        {" "}
        Name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`form__name-input
            ${nameError ? "form__name-input--error" : ""}
          `}
        />
      </label>
      <label className="form__comment">
        Comment
        <textarea
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          className={`form__comment-input
            ${commentError ? "form__comment-input--error" : ""}
          `}
        />
      </label>
      {error && <p className="error">{error}</p>}
      <div className="form__cta">
        <button type="submit" className="form__button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default PhotoPageForm;
