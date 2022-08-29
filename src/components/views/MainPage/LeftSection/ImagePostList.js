import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost } from "../../../../redux/_actions/post_action";
import NameBar from "../commons/NameBar";

function ImagePostList() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostList();
  }, []);

  const fetchPostList = () => {
    dispatch(getPost({ topic: "public" })).then((response) => {
      if (response.payload.success) {
        setPosts(response.payload.posts);
        console.log(response.payload.posts);
      } else {
        alert("게시글 정보를 가져오는데 실패하였습니다.");
      }
    });
  };

  const renderCards = Posts.map((posts, index) => {
    return (
      <tr key={index}>
        <td>{posts.title}</td>
        <td>{posts.content} </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <NameBar name="이미지 게시글" url="/FavoritePostList" />

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{renderCards}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ImagePostList;
