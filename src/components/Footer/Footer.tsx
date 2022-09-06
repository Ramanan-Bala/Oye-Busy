import "./Footer.scss";
import { ReactComponent as PlayStore } from "../../assets/black-playstore.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sl">
        <div>
          <span>RELATED SERVICES</span>
          <span>
            Electrician | Plumber | Carpenter | Packers & Movers | Salon For
            Woman | Salon For Man | Electronic Appliances | CCTV Installation &
            Repair | Ro- repair & service | house Painter | Pest Control |
            Kitchen Cleaning | Bathroom Cleaning | Sofa Cleaning | Carpet
            Cleaning | Home Deep Cleaning
          </span>
        </div>
        <div>
          <span>TOP LOCATIONS</span>
          <span>
            Delhi | Gurgaon | Noida | Ghaziabad | Faridhabad | Greater Noida
          </span>
        </div>
      </div>
      <div className="links">
        <span>About Us</span>
        <span>Blog</span>
        <span>Near me</span>
        <span>Careers</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Offers & Gift Cards</span>
        <span>Contact Us</span>
      </div>
      <div className="contact">
        <div>
          <h1>Contact Us</h1>
          <div>
            Phone : +91 9990001089
            <br />
            Email : support@oyebusy.com
          </div>
        </div>
        <div>
          <h1>Download Oyebusy App</h1>
          <PlayStore />
        </div>
      </div>
      <div className="sm">
        <Instagram />
        <Twitter />
        <Linkedin />
        <Facebook />
        <Youtube />
        <Pinterest />
      </div>
      <h5>© 2021 OyeBusy Technologies Pvt. Ltd.</h5>
    </div>
  );
};
