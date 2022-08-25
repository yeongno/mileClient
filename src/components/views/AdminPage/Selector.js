import React from "react";
import "../../styles/AdminPage/Selector.scss";

function Selector() {
  return (
    <div className="container_manage">
      <div className="manage_left">
        <button className="user">유저 관리</button>
        <button className="post">공지사항 관리</button>
      </div>
    </div>
  );
}

export default Selector;
