import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReAuth from "../../SetRedux/ReAuth";
import "../../styles/Header.scss";

function Header() {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  ReAuth();
  const goManagement = () => {
    navigate("/adminPage");
  };
  const auth = useSelector((state) => state.user);
  return (
    <div className="container">
      <div className="container_user">
        <a className="user_name">
          {window.localStorage.getItem("name")}님 환영합니다.
        </a>
        <a className="modify">내 정보 변경</a>
        {auth.isAdmin === true && (
          <a className="admin" onClick={goManagement}>
            관리자 페이지
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
