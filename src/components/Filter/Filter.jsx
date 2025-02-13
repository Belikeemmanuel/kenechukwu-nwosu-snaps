import "./Filter.scss";
import FilterTags from "../../data/tags.json";
import { useState } from "react";

function Filter({ filterAllTag }) {
  const [activeTag, setActiveTag] = useState("");

  const handleTagClick = (tag) => {
    if (activeTag) {
      setActiveTag("");
      filterAllTag("");
    } else {
      setActiveTag(tag);
      filterAllTag(tag);
    }
  };

  return (
    <div className="filter">
      <h3 className="filter__header">Filters</h3>
      <div className="filter__texts">
        {FilterTags.map((tag, index) => {
          return (
            <div key={index}>
              <small
                onClick={() => handleTagClick(tag)}
                className={`filter__tags ${
                  activeTag === tag ? "filter__tags--active" : ""
                }`}
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
