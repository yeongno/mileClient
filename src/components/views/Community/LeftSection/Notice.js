import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "../../../styles/CommunityPage/LeftSection/Notice.scss";
import { getNotice, getPost } from "../../../../redux/_actions/post_action";

function Notice() {
  // const Post = useSelector((state) => state.post.posts);
  const Post = useSelector((state) => state.post.postsNotice);
  const [Posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPostList();
  }, []);

  const fetchPostList = () => {
    dispatch(getNotice({ topic: "notice" })).then((response) => {
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
    if (index > 2) {
      return;
    }
    return (
      <div className="noticeContainer_ListSection" key={index}>
        <p> 공지사항</p>
        <p> {Post[index].title}</p>
        <p> 관리자</p>
        <p>{moment(Post[index].createdAt).format("YY[/]M[/]D")}</p>
        <p>조회수</p>
        <p>좋아요</p>
        <br />
        <div className="partitionList_ListSection" />
      </div>
    );
  });
  return <div>{renderCards}</div>;
}

export default Notice;
