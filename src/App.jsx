import "./App.scss";
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
  return (
    <>
      <Header filterVisibility={filterVisibility} />
      <main className="main">
        {filterVisible && <Filter />}
        <div className="main__content">
          <WriteUp />
          <PhotoCardList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
