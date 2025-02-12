import "./PhotoCard.scss";

function PhotoCard(props) {
  const { photographer, photo, tags, photoDescription } = props;
  return (
    <div className="photo-card">
      <div className="photo-card__display">
        <img src={photo} alt={photoDescription} className="photo-card__image" />
        <p className="photo-card__name">{photographer}</p>
      </div>
      <div className="photo-card__tags">
        {tags.map((tag, index) => {
          return (
            <p key={index} className="photo-card__tags-item">
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PhotoCard;
