import "./Assured.scss";
import wheel from "../../assets/Vectorwheel.png";
import handle from "../../assets/handle.png";
import wallet from "../../assets/wallet.png";
export const Assured = () => {
  return (
    <div className="peacemaster">
      <div className="homediv">
        <div className="peacehead">
          <h1>Assured Peace of Mind</h1>
        </div>
        <div className="content">
          <div className="con1">
            <img src={wheel} />

            <p>
              <span>Hassle Free</span>
              <br />
              Sit back and relax. We do all the work
            </p>
          </div>
          <div className="con1">
            <img src={handle} />

            <p>
              <span>Totally Cashless</span>
              <br />
              Pay online for Safe & Secure payment. Many benefits and offers
              available with online payment
            </p>
          </div>
          <div className="con1">
            <img src={wallet} />

            <p>
              <span>High Quality Work</span>
              <br />
              Only authorized service experts and genuine spare parts and
              equipments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
