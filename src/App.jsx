import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Filter from "./components/Filter/Filter.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Filter />
      </main>
      <footer>
        <small>
          &copy; 2024 Snaps. <a href="/terms">Terms</a>{" "}
          <a href="/privacy">Privacy</a> <a href="/cookies">Cookies</a>
        </small>
      </footer>
    </>
  );
}

export default App;
