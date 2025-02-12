import "./Filter.scss";
import FilterTags from "../../data/tags.json";

function Filter() {
  return (
    <div className="filter">
      <h3 className="filter__header">Filters</h3>
      <div className="filter__texts">
        {FilterTags.map((tag, index) => {
          return (
            <div key={index}>
              <p className="filter__tags">{tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
