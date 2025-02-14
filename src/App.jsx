import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Filter from "./components/Filter/Filter.jsx";
import WriteUp from "./components/WriteUp/WriteUp.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList.jsx";

function App() {
  const [filterVisible, setFilterVisible] = useState(false);

  const filterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  const [filteredTags, setFileredtags] = useState("");

  function filterAllTag(tag) {
    setFileredtags(tag);
  }
  return (
    <BrowserRouter>
      <>
        <Header
          filterVisibility={filterVisibility}
          filterVisible={filterVisible}
        />
        <main className="main">
          {filterVisible && <Filter filterAllTag={filterAllTag} />}
          <div className="main__content">
            <WriteUp />
            <PhotoCardList filteredTags={filteredTags} />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
