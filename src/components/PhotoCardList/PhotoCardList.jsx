import "./PhotoCardList.scss";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Url = import.meta.env.VITE_BACKEND_URL;

function PhotoCardList({ filteredTags }) {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await axios.get(`${Url}/photos`);
        setPhotoData(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    loadPhotos();
  }, []);

  const filteredPhotos = photoData.filter((photo) => {
    return filteredTags ? photo.tags.includes(filteredTags) : true;
  });

  return (
    <>
      <div className="photo-card-list">
        {filteredPhotos.map((item) => {
          return (
            <Link
              to={`/photos/${item.id}`}
              key={item.id}
              className="photo-card-list-link"
            >
              <PhotoCard
                photographer={item.photographer}
                photo={Url + item.photo}
                tags={item.tags}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default PhotoCardList;
