import React, { useEffect, useState } from "react";
import "../../styles/NavBar.scss";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const isAuth = window.localStorage.getItem("userId");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const goLogout = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("Admin");
    window.location.reload();
  };

  return (
    <div className="header">
      <nav className="menu">
        <div className="menu__logo">
          <a className="home" href="/">
            Home
          </a>
        </div>
        <div className="menu_login">
          {!isAuth && (
            <a className="login" onClick={goLogin}>
              LogIn
            </a>
          )}
          {isAuth && (
            <a className="logout" onClick={goLogout}>
              LogOut
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
