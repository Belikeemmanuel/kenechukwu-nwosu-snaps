import "./PhotoCardPage.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PhotoPageCard from "../../components/PhotoPageCard/PhotoPageCard.jsx";
import PhotoPageForm from "../../components/PhotoPageForm/PhotoPageForm.jsx";

function PhotoCardPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const commentsResponse = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=29091757-a36d-414d-8964-138221113fb6`
      );
      commentsResponse.data.sort((a, b) => b.timestamp - a.timestamp);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching photo or comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="photo-page">
      <PhotoPageCard id={id} />
      <PhotoPageForm comments={comments} id={id} setComments={setComments} />

      <div className="comments">
        <h3>{comments.length} Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="comments__list">
            <p>
              <strong>{comment.name}</strong> -{" "}
              {new Date(comment.timestamp).toLocaleDateString()}
            </p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoCardPage;
