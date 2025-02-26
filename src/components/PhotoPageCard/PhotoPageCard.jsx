import { useEffect, useState } from "react";
import "./PhotoPageCard.scss";
import axios from "axios";
const Url = import.meta.env.VITE_BACKEND_URL;

function PhotoPageCard({ id }) {
  const [photo, setPhoto] = useState(null);

  const fetchPhoto = async () => {
    try {
      const photoResponse = await axios.get(`${Url}/photos/${id}`);
      setPhoto(photoResponse.data);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  if (!photo) return <p>Loading...</p>;

  return (
    <article className="photo-page">
      <div className="photo-page__card">
        <div className="photo-page__display">
          <img
            src={Url + photo.photo}
            alt={photo.photoDescription}
            className="photo-page__image"
          />
        </div>
        <div className="photo-page__tags">
          {photo.tags.map((tag, index) => {
            return (
              <p key={index} className="photo-page__tags-item">
                {tag}
              </p>
            );
          })}
        </div>
        <div className="photo-page__item">
          <div className="photo-page__text">
            <div className="photo-page__likes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                className="photo-page__likes-icon"
              >
                <path
                  d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z"
                  fill="#0C1E1A"
                />
              </svg>
              <p className="photo-page__likes-item">{photo.likes} likes</p>
            </div>
            <p className="photo-page__name">Photo by {photo.photographer}</p>
          </div>
          <p className="photo-page__date">
            {new Date(photo.timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </article>
  );
}

export default PhotoPageCard;
