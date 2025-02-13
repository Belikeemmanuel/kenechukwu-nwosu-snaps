import "./Filter.scss";
import FilterTags from "../../data/tags.json";

function Filter({ filterAllTag }) {
  return (
    <div className="filter">
      <h3 className="filter__header">Filters</h3>
      <div className="filter__texts">
        {FilterTags.map((tag, index) => {
          return (
            <div key={index}>
              <small
                onClick={() => {
                  filterAllTag(tag);
                }}
                className="filter__tags"
              >
                {tag}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
