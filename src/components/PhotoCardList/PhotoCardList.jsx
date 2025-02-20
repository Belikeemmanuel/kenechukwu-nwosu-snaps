import "./PhotoCardList.scss";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function PhotoCardList({ filteredTags }) {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=29091757-a36d-414d-8964-138221113fb6`
        );
        // console.log(response);
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
                photo={item.photo}
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
