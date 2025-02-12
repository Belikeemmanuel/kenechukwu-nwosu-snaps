import "./Footer.scss";
import Icon from "../FooterIcon/FooterIcon.jsx";

function Footer() {
  return (
    <div>
      <div>
        <h1>Snaps</h1>
        <div className="footer__text">
          <div className="footer__text-item">
            <p>For photographers</p>
            <p>Hire talent</p>
            <p>Inspiration</p>
          </div>
          <div className="footer__text-item">
            <p>About</p>
            <p>Careers</p>
            <p>Support</p>
          </div>
          <div className="footer__icons-desktop">
            <Icon />
          </div>
        </div>
      </div>
      <div className="footer__icons">
        <Icon />
      </div>
      <small className="footer-bottom">
        &copy; 2024 Snaps.{" "}
        <a href="" className="footer-bottom__link">
          Terms
        </a>{" "}
        <a href="" className="footer-bottom__link">
          Privacy
        </a>{" "}
        <a href="" className="footer-bottom__link">
          Cookies
        </a>
      </small>
    </div>
  );
}

export default Footer;
