import logo from "./sun.png";
import "./LoadingSC.css";

import React from "react";

export default function LoadingSc() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p
          style={{
            fontFamily: "Noto Serif Sinhala",
            fontSize: "55px",
            margin: "50px",
          }}
        >
          සුභ නව වසරක් වේවා ! <br/> 2022
        </p>
      </header>
    </div>
  );
}
