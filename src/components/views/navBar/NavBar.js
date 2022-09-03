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

import React from "react";
import "../../styles/NavBar.scss";

function NavBar() {
  return (
    <div className="navBar_container">
      <div className="navBar_inner">
        <div className="logo_navBar">
          <img src="/assets/commons/brand.png" alt="" />
        </div>
        <div className="search_navBar">
          <input className="inputSearch_navBar" placeholder="통합 검색"></input>
          <div className="iconSearch_navBar">
            <img src="/assets/commons/searchOn.png" alt="" />
          </div>
        </div>
        <div className="options_navBar"></div>
      </div>
    </div>
  );
}

export default NavBar;
