import "./Services.scss";

import S11 from "../../assets/s11.png";
import S12 from "../../assets/s12.png";
import S13 from "../../assets/s13.png";
import S14 from "../../assets/s14.png";

import S21 from "../../assets/s21.png";
import S22 from "../../assets/s22.png";
import S23 from "../../assets/s23.png";
import S24 from "../../assets/s24.png";
import S25 from "../../assets/s25.png";

import DeliveryMan from "../../assets/delivery-man.png";

const service1 = [
  {
    image: S11,
    content: "Air-Conditioner Services",
  },
  {
    image: S12,
    content: "AC Installation",
  },
  {
    image: S13,
    content: "Sofa Cleaning Service",
  },
  {
    image: S14,
    content: "Home Deep Cleaning Service",
  },
  {
    image: S11,
    content: "Air-Conditioner Services 2",
  },
];

const service2 = [
  {
    image: S21,
    content: "Carpentry Services",
  },
  {
    image: S22,
    content: "Plumbing Services",
  },
  {
    image: S23,
    content: "Electrical Services",
  },
  {
    image: S24,
    content: "Painting Services",
  },
  {
    image: S25,
    content: "Pest Control Serviecs",
  },
];

const card = ["Professional Cleaning Services", "Most Used Services"];

export const Services = () => {
  return (
    <div>
      <div className="services">
        <h1>Trending Services</h1>
        <h5>Premium Home Services</h5>
        <div className="s-container">
          <div className="s-card-container">
            {service1.map((item) => {
              return (
                <div className="s-card" key={item.content}>
                  <img src={item.image} alt="" />
                  <div className="s-content">
                    <span>{item.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="services">
        <h1>Same Day Services</h1>
        <h5>Premium Home Services</h5>
        <div className="s-container">
          <div className="s-card-container">
            {service2.map((item) => {
              return (
                <div className="s-card" key={item.content}>
                  <img src={item.image} alt="" className="s2-img" />
                  <div className="s-content">
                    <span>{item.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="assurance-card">
        <div>
          <h1>100% Safe Services</h1>
          <div className="points">
            <ul>
              <li>Masks</li>
              <li>Temperature Checks</li>
              <li>Gloves</li>
              <li>Sanitized Tools</li>
            </ul>
          </div>
        </div>
        <img src={DeliveryMan} alt="" />
      </div>
      {card.map((c) => {
        return (
          <div className="professional" key={c}>
            <div className="pro-header">
              <h1>{c}</h1>
              <p>Premium Home Services</p>
            </div>
            <div className="cardMenu">
              <div className="cardGallery">
                <div className="cardimg"></div>
                <h5>Professional Deep Cleaning</h5>
                <p>For spring clean for end of lease clean</p>
              </div>
              <div className="cardGallery">
                <div className="cardimg"></div>
                <h5>Professional Deep Cleaning</h5>
                <p>For spring clean for end of lease clean</p>
              </div>
              <div className="cardGallery">
                <div className="cardimg"></div>
                <h5>Professional Deep Cleaning</h5>
                <p>For spring clean for end of lease clean</p>
              </div>
              <div className="cardGallery">
                <div className="cardimg"></div>
                <h5>Professional Deep Cleaning</h5>
                <p>For spring clean for end of lease clean</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
