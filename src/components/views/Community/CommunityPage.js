import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MenuTurnOff,
  SearchTurnOff,
} from "../../../redux/_actions/turn_action";
import LeftSection from "./LeftSection";
import NavBarCom from "./NavBarCom";
import PostList from "./PostList";
import RightSection from "./RightSection";
import "../../styles/CommunityPage/CommunityPage.scss";

function CommunityPage() {
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
          <NavBarCom />
        </div>
        <div className="bodyCom_container">
          <div className="leftCom_container">
            <LeftSection />
          </div>
          <div className="rightCom_container">
            <RightSection />
          </div>
        </div>
      </div>
      {/* <nav className="community_menu"> */}
      {/* <Button className="write_post" onClick={onWrite}>
          글쓰기
        </Button>
        <Button className="mylist_post" onClick={onTest}>
          나의 글 목록
        </Button>
      </nav>
      <PostList /> */}
    </div>
  );
}

export default CommunityPage;
