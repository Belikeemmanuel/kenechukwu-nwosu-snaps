import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PhotoCardPage from "./pages/PhotoCardPage/PhotoCardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

function App() {
  const [filterVisible, setFilterVisible] = useState(false);

  const filterVisibility = () => {
    setFilterVisible(!filterVisible);
  };
  return (
    <BrowserRouter>
      <>
        <Header
          filterVisibility={filterVisibility}
          filterVisible={filterVisible}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage filterVisible={filterVisible} />}
          />
          <Route path="/photos/:id" element={<PhotoCardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
