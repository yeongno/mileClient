import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const items = [
    { label: <a>Home</a>, key: "mail" }, // remember to pass the key prop
    { label: <a>Favorite</a>, key: "favorite" }, // which is required
  ];
  return <Menu style={{ display: "flex" }} items={items} />;
}

export default LeftMenu;
