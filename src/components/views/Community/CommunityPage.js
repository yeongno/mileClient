import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  MenuTurnOff,
  SearchTurnOff,
} from "../../../redux/_actions/turn_action";
import LeftSection from "./LeftSection";
import NavBarCom from "./MenuBarCom";
import PostList from "./PostList";
import RightSection from "./RightSection";
import "../../styles/CommunityPage/CommunityPage.scss";
import MenuBarCom from "./MenuBarCom";
import DetailPost from "./DetailPost/DetailPost";

function CommunityPage() {
  const [MenuBar, setMenuBar] = useState("전체");
  const [OnDetailPost, setOnDetailPost] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onWrite = () => {
    navigate("/writePost");
  };
  const onTest = () => {
    navigate("/onTest");
  };
  useEffect(() => {
    dispatch(SearchTurnOff(true));
    dispatch(MenuTurnOff(true));
  }, []);

  return (
    <div className="main_container">
      <div className="inner_container_pc">
        <div className="navBarCom_container">
          <MenuBarCom />
          <Outlet context={{ setOnDetailPost }} />
        </div>
        <div className="bodyCom_container">
          <div className="leftCom_container">
            <LeftSection OnDetailPost={OnDetailPost} />
          </div>
          <div className="rightCom_container">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
