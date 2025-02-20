import { useState } from "react";
import "./HomePage.scss";
import Filter from "../../components/Filter/Filter.jsx";
import WriteUp from "../../components/WriteUp/WriteUp.jsx";
import PhotoCardList from "../../components/PhotoCardList/PhotoCardList.jsx";

function HomePage({ filterVisible }) {
  const [filteredTags, setFilteredTags] = useState("");

  function filterAllTag(tag) {
    setFilteredTags(tag);
  }
  return (
    <div>
      <main className="main">
        {filterVisible && <Filter filterAllTag={filterAllTag} />}
        <div className="main__content">
          <WriteUp />
          <PhotoCardList filteredTags={filteredTags} />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
