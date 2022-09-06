import "./Assured.scss";
import Wheel from "../../assets/Vectorwheel.png";
import Handle from "../../assets/handle.png";
import Wallet from "../../assets/wallet.png";
export const Assured = () => {
  return (
    <div className="assurance">
      <h1>Assured Peace of Mind</h1>
      <div className="content">
        <div>
          <img src={Wheel} alt="" />
          <div className="description">
            <h5>Hassle Free</h5>
            <span>Sit back and relax. We do all the work</span>
          </div>
        </div>
        <div>
          <img src={Handle} alt="" />
          <div className="description">
            <h5>Totally Cashless</h5>
            <span>
              Pay online for Safe & Secure payment. Many benefits and offers
              available with online payment
            </span>
          </div>
        </div>
        <div>
          <img src={Wallet} alt="" />
          <div className="description">
            <h5>High Quality Work</h5>
            <span>
              Only authorized service experts and genuine spare parts and
              equipments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
