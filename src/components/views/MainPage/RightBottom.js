import React from "react";
import AppAD from "./RightSection/AppAD";
import AD1 from "./RightBottom/AD1";
import AD2 from "./RightBottom/AD2";

function RightBottom() {
  return (
    <div style={{ paddingLeft: "1.5rem", height: "100%" }}>
      <AD1 />
      <AD2 />
    </div>
  );
}

export default RightBottom;
