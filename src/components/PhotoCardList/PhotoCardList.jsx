import "./PhotoCardList.scss";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";
import photoData from "../../data/photos.json";

function PhotoCardList() {
  return (
    <>
      <div className="photo-card-list">
        {photoData.map((item) => {
          return (
            <PhotoCard
              key={item.id}
              photographer={item.photographer}
              photo={item.photo}
              tags={item.tags}
            />
          );
        })}
      </div>
    </>
  );
}

export default PhotoCardList;
