import "./FooterIcon.scss";
import facebookicon from "../../assets/images/Facebook.svg";
import instagramicon from "../../assets/images/Instagram.svg";
import xtwittericon from "../../assets/images/X_twitter.svg";
import pinteresticon from "../../assets/images/Pinterest.svg";

function FooterIcon() {
  return (
    <div className="icons">
      <a href="https://www.facebook.com/">
        <img src={facebookicon} alt="facebook icon" className="icons__image" />
      </a>
      <a href="https://x.com/?lang=en">
        <img src={xtwittericon} alt="twitter icon" className="icons__image" />
      </a>
      <a href="https://www.instagram.com/">
        <img
          src={instagramicon}
          alt="instagram icon"
          className="icons__image"
        />
      </a>
      <a href="https://www.pinterest.com/">
        <img
          src={pinteresticon}
          alt="pinterest icon"
          className="icons__image"
        />
      </a>
    </div>
  );
}

export default FooterIcon;
