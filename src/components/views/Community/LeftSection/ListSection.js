import useSelection from "antd/lib/table/hooks/useSelection";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPost } from "../../../../redux/_actions/post_action";
import Header from "./Header";
import "../../../styles/CommunityPage/LeftSection/LeftSection.scss";
import TopLabel from "./TopLabel";
import moment from "moment";
import Notice from "./Notice";

function ListSection() {
  const dispatch = useDispatch();
  const Post = useSelector((state) => state.post.posts);

  const navigate = useNavigate();
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostList();
    console.log("post", Post);
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
    let paging = 0;
    // if(index - (10*(paging-1)))
    if (index > 30) {
      return;
    }
    return (
      <div className="ListContainer_ListSection" key={index}>
        <p> {Post[index].topic}</p>
        <p> {Post[index].title}</p>
        <p> 글쓴이</p>
        <p>{moment(Post[index].createdAt).format("YY[/]M[/] D")}</p>
        <p>조회수</p>
        <p>좋아요</p>
        <br />
        <div className="partitionList_ListSection" />
      </div>
    );
  });
  return (
    <div>
      <Header />
      <TopLabel />
      <Notice />
      {renderCards}
    </div>
  );
}

export default ListSection;
