import useSelection from "antd/lib/table/hooks/useSelection";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPost } from "../../../../redux/_actions/post_action";

function ListSection() {
  const dispatch = useDispatch();
  const Post = useSelector((state)=>state.post.posts)

  const navigate = useNavigate();
  const goPost = () => {
    navigate("/postPage");
  };
  const goFavoriteList = () => {
    navigate("/myFavoriteList");
  };
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostList();
    console.log("post",Post)
  }, []);

  const fetchPostList = () => {
    dispatch(getPost({ topic: "public" })).then(
      (response) => {
        if (response.payload.success) {
          setPosts(response.payload.posts);
        } else {
          alert("게시글 정보를 가져오는데 실패하였습니다.");
        }
      }
    );
  };

  // const onClickDelete = (title, userFrom, postFrom) => {
  //   const variables = {
  //     title,
  //     userFrom,
  //     postFrom,
  //   };

  //   axios.post("/api/posts/removePost", variables).then((response) => {
  //     if (response.data.success) {
  //       fetchPostList();
  //     } else {
  //       alert("리스트에서 지우는데 실패 했습니다.");
  //     }
  //   });
  //   axios
  //     .post("/api/favoriteList/removeFavorites", variables)
  //     .then((response) => {});
  // };

  // const renderCards = Posts.map((posts, index) => {
  //   return (
  //     <tr key={index}>
  //       <td>{posts.title}</td>
  //       <td>{posts.content} </td>
  //       <td>
  //         {/* <button onClick={() => onClickArticle(posts.title, posts.userFrom)}> */}
  //         <Link to={`/postPage/${posts._id}`}>
  //           <button>글 보기 </button>
  //         </Link>
  //         {/* </button> */}
  //         <button
  //           // onClick={() =>
  //           //   onClickDelete(posts.title, posts.userFrom, posts.postFrom)
  //           // }
  //         >
  //           Remove
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // });
  const renderCards = Posts.map((posts, index) => {
    return (
      <tr key={index}>
        <td>{posts.title}</td>
        <td>{posts.content} </td>
        <td>
          {/* <button onClick={() => onClickArticle(posts.title, posts.userFrom)}> */}
          <Link to={`/postPage/${posts._id}`}>
            <button>글 보기, {Post[index].title} </button>
          </Link>
          {/* </button> */}
          <button
            // onClick={() =>
            //   onClickDelete(posts.title, posts.userFrom, posts.postFrom)
            // }
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <button onClick={goPost}>게시글 작성</button>
      <button onClick={goFavoriteList}>My FavoriteList</button>
      <div style={{ width: "85", margin: "3rem auto" }}>
        <h2>게시글 목록</h2>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Remove from Articles</th>
            </tr>
          </thead>
          <tbody>{renderCards}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ListSection;
