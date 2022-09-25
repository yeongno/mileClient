import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";
import { getOnePost } from "../../../../redux/_actions/post_action";
import "../../../styles/CommunityPage/DetailPost/DetailPost.scss";
import PostSection from "./PostSection";
import ReplySection from "./ReplySection";

function DetailPost(props) {
  const postId = useParams().postId;
  console.log(postId);
  const dispatch = useDispatch();
  const [Posts, setPosts] = useState([]);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState();
  const [UserFrom, setuserFrom] = useState();
  const { setOnDetailPost } = useOutletContext();

  useEffect(() => {
    fetchPostList();
    setOnDetailPost(Title);
  }, [postId]);

  const fetchPostList = () => {
    dispatch(getOnePost({ _id: postId })).then((response) => {
      if (!response.payload.success) {
        alert("게시글 정보를 가져오는데 실패했습니다.");
      }
    });
  };

  return (
    <div className="detailPost_Container">
      <PostSection />
      <ReplySection />
    </div>
  );
}
export default DetailPost;
