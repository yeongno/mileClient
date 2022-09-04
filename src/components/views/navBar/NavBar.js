// import React, { useEffect, useState } from "react";
// import "../../styles/NavBar.scss";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../../redux/_actions/user_action";
// function NavBar() {
//   const isAuth = useSelector((state) => state.user.isAuth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     navigate("/mainPage");
//   }, []);

//   const goLogin = () => {
//     navigate("/login");
//   };
//   const dispatch = useDispatch();
//   const goLogout = () => {
//     window.localStorage.removeItem("userId");
//     window.localStorage.removeItem("name");
//     window.localStorage.removeItem("Admin");
//     dispatch(logout());
//     // window.location.reload();
//   };

//   return (
//     // <div className="header">
//     //   <nav className="menu">
//     //     <div className="menu__logo">
//     //       <a className="home" href="/">
//     //         Home
//     //       </a>
//     //     </div>
//     //     <div className="menu_login">
//     //       {!isAuth && (
//     //         <a className="login" onClick={goLogin}>
//     //           LogIn
//     //         </a>
//     //       )}
//     //       {isAuth && (
//     //         <a className="logout" onClick={goLogout}>
//     //           LogOut
//     //         </a>
//     //       )}
//     //     </div>
//     //   </nav>
//     // </div>
//   );
// }

// export default NavBar;

import { Switch } from "antd";
import React, { useEffect } from "react";
import "../../styles/NavBar.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/mainPage");
  }, []);
  const onHome = () => {
    navigate("/mainPage");
  };
  const TurnOff = useSelector((state) => state.turn.turnOffSearch);
  return (
    <div className="navBar_container">
      <div className="navBar_inner">
        <div className="logo_navBar">
          <img
            src="/assets/commons/brand.png"
            alt=""
            onClick={onHome}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="searchNav_container">
          {!TurnOff && (
            <div className="search_navBar">
              <input
                className="inputSearch_navBar"
                placeholder="통합 검색"
              ></input>
              <div className="iconSearch_navBar">
                <img src="/assets/commons/searchOn.png" alt="" />
              </div>
            </div>
          )}
        </div>

        <div className="options_navBar">
          <div className="ano_navBar">
            <a>익명 활성화</a>
            <Switch size="small" style={{ alignSelf: "center" }} />
          </div>
          <div className="noti_navBar">
            <div className="imgNavBar_container">
              <img src="/assets/commons/bell.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
