import "./Filter.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function Filter({ filterAllTag }) {
  const [activeTag, setActiveTag] = useState("");
  const [FilterTags, setFilterTags] = useState([]);

  useEffect(() => {
    const loadFilter = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=29091757-a36d-414d-8964-138221113fb6`
        );
        setFilterTags(response.data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    loadFilter();
  });

  const handleTagClick = (tag) => {
    setActiveTag((prevTag) => (prevTag === tag ? "" : tag));
    filterAllTag((prevTag) => (prevTag === tag ? "" : tag));
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
