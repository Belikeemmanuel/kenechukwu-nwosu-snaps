import "./PhotoCardList.scss";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";
import photoData from "../../data/photos.json";

function PhotoCardList({ filteredTags }) {
  const filteredPhotos = () => {
    if (filteredTags) {
      const filteredData = photoData.filter((photo) => {
        return photo.tags.includes(filteredTags);
      });
      return filteredData;
    } else {
      return photoData;
    }
  };

  return (
    <>
      <div className="photo-card-list">
        {filteredPhotos().map((item) => {
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
