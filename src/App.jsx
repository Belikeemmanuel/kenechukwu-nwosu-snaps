import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Filter from "./components/Filter/Filter.jsx";
import WriteUp from "./components/WriteUp/WriteUp.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Filter />
        <div>
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
