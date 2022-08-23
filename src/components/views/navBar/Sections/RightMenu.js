/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
// import { USER_SERVER } from "../../../Config";

function RightMenu(props) {
  const items = [
    { label: <a>Signin</a>, key: "mail" }, // remember to pass the key prop
    { label: <a>Signup</a>, key: "app" }, // which is required
  ];
  return <Menu items={items} />;
}

export default RightMenu;
