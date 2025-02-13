import "./Footer.scss";
import Icon from "../FooterIcon/FooterIcon.jsx";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <h1 className="footer__header">Snaps</h1>
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
      <p className="footer__bottom">
        &copy; 2024 Snaps{" "}
        <a href="" className="footer__bottom-link">
          . Terms
        </a>{" "}
        <a href="" className="footer__bottom-link">
          Privacy
        </a>{" "}
        <a href="" className="footer__bottom-link">
          Cookies
        </a>
      </p>
    </div>
  );
}

export default Footer;
