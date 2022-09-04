import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MenuTurnOff,
  SearchTurnOff,
} from "../../../redux/_actions/turn_action";
import PostList from "./PostList";

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
    <div className="community_container">
      <nav className="community_menu">
        <Button className="write_post" onClick={onWrite}>
          글쓰기
        </Button>
        <Button className="mylist_post" onClick={onTest}>
          나의 글 목록
        </Button>
      </nav>
      <PostList />
    </div>
  );
}

export default CommunityPage;
