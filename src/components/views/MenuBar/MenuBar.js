import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/MenuBar.scss";

function MenuBar() {
  //비활성화 상태값이 들어올시 값을 받아와서 적용
  const TurnOff = useSelector((state) => state.turn.turnOff);

  const navigate = useNavigate();
  const onCommunity = () => {
    navigate("/community");
  };
  return (
    <nav
      className={
        TurnOff === "MenuBarTurnOff" ? "TurnOffMenuBar" : "menu_container"
      }
    >
      <div className="btn_container">
        <Button onClick={onCommunity}>커뮤니티</Button>
        <Button>공지사항</Button>
        <Button>다운로드</Button>
      </div>
    </nav>
  );
}

export default MenuBar;
