import React from "react";
import Data from "./Data";
import TopImageSet from "./TopImageSet/TopImageSet";

export default function PC() {
  return (
    <div>
      {/* <TopImageSet style={{position:"absolute",zindex:"-1",left:"0px",top:"0px"}}/>
      <p  style={{position:"absolute",zindex:"100",left:"0px",top:"0px"}}>as</p> */}
      <Data />
    </div>
  );
}
