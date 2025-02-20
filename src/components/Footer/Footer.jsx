import "./Footer.scss";
import Icon from "../FooterIcon/FooterIcon.jsx";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <a href="../../index.html" className="footer__header">
          Snaps
        </a>
        <div className="footer__text">
          <div className="footer__text-list">
            <a href className="footer__text-item">
              For photographers
            </a>
            <a href="" className="footer__text-item">
              Hire talent
            </a>
            <a href="" className="footer__text-item">
              Inspiration
            </a>
          </div>
          <div className="footer__text-list">
            <a href="" className="footer__text-item">
              About
            </a>
            <a href="" className="footer__text-item">
              Careers
            </a>
            <a href="" className="footer__text-item">
              Support
            </a>
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
