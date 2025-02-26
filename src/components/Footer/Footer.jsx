import "./Footer.scss";
import Icon from "../FooterIcon/FooterIcon.jsx";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <Link to={"/"} className="footer__header">
          Snaps
        </Link>
        <div className="footer__text">
          <div className="footer__text-list">
            <Link to="" className="footer__text-item">
              For photographers
            </Link>
            <Link to="" className="footer__text-item">
              Hire talent
            </Link>
            <Link to="" className="footer__text-item">
              Inspiration
            </Link>
          </div>
          <div className="footer__text-list">
            <Link to="" className="footer__text-item">
              About
            </Link>
            <Link to="" className="footer__text-item">
              Careers
            </Link>
            <Link to="" className="footer__text-item">
              Support
            </Link>
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
        <Link to="" className="footer__bottom-link">
          . Terms
        </Link>{" "}
        <Link to="" className="footer__bottom-link">
          Privacy
        </Link>{" "}
        <Link to="" className="footer__bottom-link">
          Cookies
        </Link>
      </p>
    </div>
  );
}

export default Footer;
