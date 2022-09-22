import React from "react";
import AD1 from "./RightSection/AD1";
import AD2 from "./RightSection/AD2";
import AD3 from "./RightSection/AD3";
import AD4 from "./RightSection/AD4";
import PetWindow from "./RightSection/PetWindow";
import TodayRank from "./RightSection/TodayRank";

function RightSection() {
  return (
    <div style={{ paddingLeft: "1.5rem", height: "100%" }}>
      <PetWindow />
      <AD1 />
      <TodayRank />
      <AD2 />
      <AD3 />
      <AD4 />
    </div>
  );
}

export default RightSection;
