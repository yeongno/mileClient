import { PartitionOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost } from "../../../../redux/_actions/post_action";
import "../../../styles/MainPage/FavoritePostList.scss";
import NameBar from "../commons/NameBar";

function FavoritePostList() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [Posts, setPosts] = useState([]);
  const pageLabel = "인기 게시판";
  useEffect(() => {
    fetchPostList();
  }, []);

  const fetchPostList = () => {
    dispatch(getPost({ topic: "public" })).then((response) => {
      if (response.payload.success) {
        setPosts(response.payload.posts);
      } else {
        alert("게시글 정보를 가져오는데 실패하였습니다.");
      }
    });
  };

  const renderCards = Posts.map((posts, index) => {
    if (index >= 8) {
      return;
    }
    return (
      <div key={index}>
        <div className="favoritePost_container">
          <div className="profileContainer_FavoritePostList">
            <img src="/assets/profile.png" alt="" />
          </div>
          <div className="titleContainer_FavoritePostList">
            <a>{posts.title}</a>
          </div>
          <div className="contentContainer_FavoritePostList">
            <a>| {pageLabel}</a>
          </div>
          <div className="createdATContainer_FavoritePostList">
            <a>| 11/12</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="FavoritePostList_container">
        <NameBar name="인기 게시글" url="/FavoritePostList" />
        {renderCards}
      </div>
    </div>
  );
}
export default FavoritePostList;
