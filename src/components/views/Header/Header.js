import React from "react";
import "../../styles/Header.scss";

function Header() {
  const isAdmin = window.localStorage.getItem("Admin");
  return (
    <div className="container">
      <div className="container_user">
        <a className="user_name">
          {window.localStorage.getItem("name")}님 환영합니다.
        </a>
        <a className="modify">내 정보 변경</a>
        {isAdmin && <a className="admin">관리자 페이지</a>}
      </div>
    </div>
  );
}

export default Header;
