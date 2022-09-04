import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/MenuBar.scss";

function MenuBar() {
  /**비활성화 상태값이 들어올시 값을 받아와서 적용 */
  const TurnOff = useSelector((state) => state.turn.turnOffMenu);
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const onCommunity = () => {
    navigate("/community");
  };
  return (
    <nav className={TurnOff === true ? "TurnOffMenuBar" : "menu_container"}>
      <div className="btnContainer_MenuBar">
        <div className="leftBtn_MenuBar">
          <button onClick={onCommunity}>전체 게시판</button>
          <button>사단/근무지 별 게시판</button>
          <button>펫 게시판</button>
        </div>
        <div className="rightBtn_MenuBar">
          <button style={{ marginRight: "0.5rem" }}>멘토 찾기</button>
          <div className="partition_MenuBar" />
          <button style={{ marginLeft: "0.5rem" }}>멘티 찾기</button>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
