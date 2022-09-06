import "./LookingFor.scss";

import AC from "../../assets/ac.png";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as DownFill } from "../../assets/down-fill.svg";
import Salon from "../../assets/salon.jpg";
import Electrical from "../../assets/electrical.jpg";
import Plumber from "../../assets/plumber.jpg";
import Cctv from "../../assets/cctv.jpg";
import Ac from "../../assets/ac.jpg";
import Packer from "../../assets/packer.jpg";
import Cleaning from "../../assets/cleaning.jpg";
import Paint from "../../assets/paint.jpg";
import Home from "../../assets/home.jpg";
import Disinfection from "../../assets/disinfection.jpg";
import Pest from "../../assets/pest.jpg";
import Carpenter from "../../assets/carpenter.jpg";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";

const items = [
  {
    image: Salon,
    content: "Salon at Home",
  },
  {
    image: Electrical,
    content: "Electrician",
  },
  {
    image: Plumber,
    content: "Plumber",
  },
  {
    image: Cctv,
    content: "CCTV",
  },
  {
    image: Ac,
    content: "AC Service",
  },
  {
    image: Packer,
    content: "Packers & Movers",
  },
  {
    image: Cleaning,
    content: "Cleaning",
  },
  {
    image: Paint,
    content: "House Painting",
  },
  {
    image: Home,
    content: "Home Appliances",
  },
  {
    image: Disinfection,
    content: "Disinfection",
  },
  {
    image: Pest,
    content: "Pest Control",
  },
  {
    image: Carpenter,
    content: "Carpenter",
  },
];

export const LookingFor = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={AC} alt="" />
        <div className="middle">
          <h1 className="heading">
            Home services,
            <br /> on demand
          </h1>
          <div>
            <div className="search">
              <Search height={18} />
              <input type="text" placeholder="Search for a service" />
            </div>
            <p className="examples">
              Examples: <span>Salon,</span> <span>Women's hair,</span>{" "}
              <span>Men's grooming</span> & Many more..
            </p>
          </div>
        </div>
      </div>
      <div className="lookingFor">
        <h1 className="heading">What are you looking for?</h1>
        <span className="discount">
          <div>
            FLAT $400 OFF <DownFill />
          </div>
        </span>
        <div className="items">
          {items.map((item) => {
            return (
              <div key={item.content}>
                <img src={item.image} alt="" />
                <span>{item.content}</span>
              </div>
            );
          })}
        </div>
        <div className="card">
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
        </div>
      </div>
    </div>
  );
};
