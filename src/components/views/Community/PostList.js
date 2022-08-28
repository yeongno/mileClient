import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPost } from "../../../redux/_actions/post_action";

function PostList() {
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
      <div style={{ width: "85", margin: "3rem auto" }}>
        <h2>게시글 목록</h2>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{renderCards}</tbody>
          <tbody>{renderCards}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PostList;
