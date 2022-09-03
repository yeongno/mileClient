import React from "react";
import AppAD from "./RightSection/AppAD";
import MyPet from "./RightSection/MyPet";
import PowerRank from "./RightSection/PowerRank";

function RightSection() {
  return (
    <div
      className="rightSection_container"
      style={{ paddingLeft: "1.5rem", height: "100%" }}
    >
      <MyPet />
      <AppAD />
      <PowerRank />
    </div>
  );
}

export default RightSection;
