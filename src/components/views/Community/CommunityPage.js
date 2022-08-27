import { Button } from "antd";
import React from "react";
import PostList from "./PostList";

function CommunityPage() {
  return (
    <div className="community_container">
      <nav className="community_menu">
        <Button className="write_post">글쓰기</Button>
        <Button className="mylist_post">나의 글 목록</Button>
      </nav>
      <PostList />
    </div>
  );
}

export default CommunityPage;
