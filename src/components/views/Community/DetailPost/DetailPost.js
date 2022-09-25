import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useOutlet, useOutletContext, useParams } from "react-router-dom";
import MenuBarCom from "../MenuBarCom";
import "../../../styles/CommunityPage/DetailPost/DetailPost.scss";
import CommunityPage from "../CommunityPage";
import ListSection from "../LeftSection/ListSection";

function DetailPost(props) {
  const postId = useParams().postId;
  console.log(postId);
  const dispatch = useDispatch();
  const [Posts, setPosts] = useState([]);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState();
  const [UserFrom, setuserFrom] = useState();
  const [Favorited, setFavorited] = useState(true);
  const { setOnDetailPost } = useOutletContext();

  const variable = {
    userFrom: UserFrom,
    postFrom: postId,
    title: Title,
    content: Content,
  };
  useEffect(() => {
    fetchPostList();
    setOnDetailPost(Title);
  }, [postId]);

  const fetchPostList = () => {
    axios.post("/api/posts/getOnePost", { _id: postId }).then((response) => {
      if (response.data.success) {
        setPosts(response.data.posts);
        setTitle(response.data.posts[0].title);
        setContent(response.data.posts[0].content);
        setuserFrom(response.data.posts[0].userFrom);
        console.log(response.data.posts[0]);
      } else {
        alert("게시글 정보를 가져오는데 실패하였습니다.");
      }
    });
    axios
      .post("/api/favoriteList/favorited", {
        userFrom: window.localStorage.getItem("userId"),
        postFrom: postId,
      })
      .then((response) => {
        if (response.data.favorited === true) {
          setFavorited(true);
        } else if (response.data.favorited !== true) {
          setFavorited(false);
        }
      });
  };

  return (
    <div className="detailPost_Container">
      <table>
        <thead>
          <tr>
            <th>Title : {Title} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content : {Content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default DetailPost;
