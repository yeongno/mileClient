import React, { useEffect, useState } from "react";
import "../../styles/NavBar.scss";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <nav className="menu">
        <div className="menu__logo">
          <a href="/">Home</a>
          <a onClick={goLogin}>Login</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
