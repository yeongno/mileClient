import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MenuBar.scss";

function MenuBar() {
  const navigate = useNavigate();
  const onCommunity = () => {
    navigate("/community");
  };
  return (
    <nav className="menu_container">
      <div className="btn_container">
        <Button onClick={onCommunity}>커뮤니티</Button>
        <Button>공지사항</Button>
        <Button>다운로드</Button>
      </div>
    </nav>
  );
}

export default MenuBar;
