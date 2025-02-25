import "./Filter.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Url = import.meta.env.VITE_BACKEND_URL;

function Filter({ filterAllTag }) {
  const [activeTag, setActiveTag] = useState("");
  const [FilterTags, setFilterTags] = useState([]);

  useEffect(() => {
    const loadFilter = async () => {
      try {
        const response = await axios.get(`${Url}/tags`);
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
