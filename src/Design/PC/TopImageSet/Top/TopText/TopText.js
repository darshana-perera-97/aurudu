import React from "react";
import "./TopText.css";

export default function TopText() {
  const windowHeight = window.innerHeight;
  const d = windowHeight + "px";
  return (
    <div>
      <b>
        <p
          id="topText"
          style={{
            fontFamily: "Noto Serif Sinhala",

            textAlign: "center",
            // color: "#ad0909ef",
            color: "red",
            fontWeight: "bold",
            marginBottom: "20px",
            //   textShadow:"0 0 50px #FFFFFF, 0 0 50px #FFFFFF"
            textShadow:
              "5px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 5px 5px #fff, -1px -1px 0 #fff, 5px -1px 0 #fff, -1px 5px 0 #fff",
          }}
        >
          සුභ නව වසරක් වේවා ! 2022
        </p>
      </b>
      <p
        id="Text"
        style={{
          textAlign: "center",
          margin: "0px",
          textShadow:
            "2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -2px 0 #fff, 2px 2px #fff, -1px -1px 0 #fff, 2px -1px 0 #fff, -1px 4px 0 #fff",
        }}
      >
        නැකත් සීට්ටුව
      </p>
    </div>
  );
}
