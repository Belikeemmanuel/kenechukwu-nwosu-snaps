import "./PhotoCard.scss";

function PhotoCard(props) {
  const { photographer, photo, tags, photoDescription } = props;
  return (
    <div className="photo-card">
      <div className="photo-card__display">
        <img src={photo} alt={photoDescription} className="photo-card__image" />
        <small className="photo-card__name">{photographer}</small>
      </div>
      <div className="photo-card__tags">
        {tags.map((tag, index) => {
          return (
            <small key={index} className="photo-card__tags-item">
              {tag}
            </small>
          );
        })}
      </div>
    </div>
  );
}

export default PhotoCard;
