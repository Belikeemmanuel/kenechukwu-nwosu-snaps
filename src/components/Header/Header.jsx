import "./Header.scss";
import icon from "../../assets/images/Filter.svg";

function Header() {
  return (
    <div className="header">
      <h1 className="header__text">Snaps</h1>
      <button className="header__button">
        Filters{" "}
        <img
          src={icon}
          alt="filter icon"
          className="
          header__icon"
        />{" "}
      </button>
    </div>
  );
}

export default Header;
