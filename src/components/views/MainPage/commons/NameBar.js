import { DoubleRightOutlined } from "@ant-design/icons";
import React from "react";
import "../../../styles/MainPage/NameBar.scss";
function NameBar(props) {
  return (
    <div className="nameBar_container">
      <div className="name_NameBar">{props.name}</div>
      <div className="btn_NameBar">
        더 보기 <DoubleRightOutlined style={{ color: "rgb(165, 240, 115)" }} />
      </div>
    </div>
  );
}

export default NameBar;
