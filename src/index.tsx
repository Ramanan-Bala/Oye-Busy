import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";
import "./preflight.scss";

import { Header } from "./components/Header/Header";
import { LookingFor } from "./components/LookingFor/LookingFor";
import { Services } from "./components/Services/Services";
import { Footer } from "./components/Footer/Footer";
import { Assured } from "./components/Assured/Assured";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <div className="padding">
      <LookingFor />
      <Services />
      <Assured />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
