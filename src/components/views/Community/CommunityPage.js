import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";

function CommunityPage() {
  const navigate = useNavigate();
  const onWrite = () => {
    navigate("/writePost");
  };
  const onTest = () => {
    navigate("/onTest");
  };
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
