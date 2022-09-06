import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Down } from "../../assets/down.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import Location from "../../assets/location.jpeg";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <Logo />
          <div className="location">
            <img src={Location} alt="location" />
            <span className="icon">
              1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
              <Down />
            </span>
          </div>
        </div>
        <div className="right">
          <span>Blog</span>
          <span>Career</span>
          <span className="icon">
            My Account <Down />
          </span>
          <Cart />
          <span className="icon button">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3402_2934)">
                <path d="M1.48266 0.773438C1.24538 1.08701 1.11328 1.47274 1.11328 1.88553V18.2242C1.11328 18.6076 1.22764 18.9678 1.43419 19.2687L10.3242 9.99586L1.48266 0.773438Z" />
                <path d="M11.1383 9.14644L14.0224 6.13824L3.88463 0.285291C3.44462 0.0311932 2.93979 -0.0290441 2.46875 0.103356L11.1383 9.14644Z" />
                <path d="M11.14 10.8438L2.38281 19.9781C2.57163 20.0416 2.76702 20.0735 2.96256 20.0735C3.2798 20.0735 3.59719 19.99 3.8863 19.8231L14.097 13.9279L11.14 10.8438Z" />
                <path d="M18.0349 8.4554L15.0711 6.74414L11.9531 9.99619L15.1439 13.3245L18.0349 11.6553C18.6135 11.3214 18.9588 10.7232 18.9588 10.0554C18.9588 9.38739 18.6135 8.7893 18.0349 8.4554Z" />
              </g>
              <defs>
                <clipPath id="clip0_3402_2934">
                  <rect
                    width="20"
                    height="20.0391"
                    fill="white"
                    transform="translate(0 0.0351562)"
                  />
                </clipPath>
              </defs>
            </svg>
            Download App
          </span>
        </div>
      </div>
      <div className="m-header">
        <div className="location">
          <img src={Location} alt="location" />
          <span className="icon">
            1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
            <Down />
          </span>
        </div>
        <div className="search">
          <Search height={18} />
          <input type="text" placeholder="Search for a service" />
        </div>
      </div>
    </div>
  );
};
