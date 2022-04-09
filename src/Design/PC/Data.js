import React from "react";
import "./Data.css";
import TopBackground from "./TopImageSet/Top/TopBackground";
import TopText from "./TopImageSet/Top/TopText/TopText";

export default function Data() {
  return (
    <div id="back">
      <div id="myDIV">
        <div id="myBox">
          <TopText />
        </div>
        <div style={{ top: "0px", left: "0px", zIndex: "-10" }}>
          <TopBackground />
        </div>
      </div>
    </div>
  );
}
