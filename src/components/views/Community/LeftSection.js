import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Banner from "./LeftSection/Banner";
import ListSection from "./LeftSection/ListSection";

function LeftSection(props) {
  const menuTopic = useSelector((state)=>state.turn.turnMenu)
  const [OnDetailPost, setOnDetailPost] = useState("");
  useEffect(() => {
    setOnDetailPost(props.OnDetailPost);
    console.log("menu", menuTopic)
  }, [props.OnDetailPost]);
  return (
    <div>
      {OnDetailPost === false && <Banner />}
      {/* {menuTopic=="COMMUNITY_MENU" &&
      <ListSection onClass={props.onClass}  />
      ||<></>
    } */}
    <Outlet />
    </div>
  );
}

export default LeftSection;
