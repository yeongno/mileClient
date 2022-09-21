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
import Footer from "./Footer";

function ListSection() {
  const dispatch = useDispatch();
  const Post = useSelector((state) => state.post.posts);
  const [LastIndex, setLastIndex] = useState(0);
  const [ThisPaging, setThisPaging] = useState(1);
  const [ThisTopic, setThisTopic] = useState("public");

  const navigate = useNavigate();
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostList();
  }, [ThisTopic, LastIndex]);

  const fetchPostList = () => {
    dispatch(getPost({ topic: ThisTopic })).then((response) => {
      if (response.payload.success) {
        setPosts(response.payload.posts);
        setLastIndex(response.payload.posts.length);
      } else {
        alert("게시글 정보를 가져오는데 실패하였습니다.");
      }
    });
  };

  const renderCards = Posts.map((posts, index) => {
    if (ThisPaging * 30 < index + 1 || index < ThisPaging * 30 - 30) {
      return;
    }

    return (
      <div className="ListContainer_ListSection" key={index}>
        <p> {Post[index].topic}</p>
        <p>
          {" "}
          <Link
            style={{
              color: "gray",
            }}
            to={`/${Post[index]._id}`}
          >
            {Post[index].title}
          </Link>
        </p>{" "}
        <p> 글쓴이</p>
        <p>{moment(Post[index].createdAt).format("YY[/]M[/]D")}</p>
        <p>{index}</p>
        <p>-</p>
        <div className="partitionList_ListSection" />
      </div>
    );
  });
  return (
    <div>
      <Header setThisTopic={setThisTopic} setThisPaging={setThisPaging} />
      <TopLabel />
      <Notice />
      {renderCards}
      {/* {ThisPaging} */}
      {LastIndex > 1 && (
        <Footer
          LastIndex={LastIndex}
          setThisPaging={setThisPaging}
          ThisTopic={ThisTopic}
        />
      )}
    </div>
  );
}

export default ListSection;
