import { BorderOutlined } from "@ant-design/icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/TopLabel.scss";

function TopLabel() {
  const Post = useSelector((state) => state.post.postOne);
  const [Title, setTitle] = useState("");
  const [Topic, setTopic] = useState("");
  const [CreatedAt, setCreatedAt] = useState("");
  // console.log(Post[0]);
  useEffect(() => {
    fetchPostList();
  }, [Post]);
  const fetchPostList = () => {
    if (Post) {
      setTitle(Post[0].title);
      setTopic(Post[0].topic);
      setCreatedAt(Post[0].createdAt);
    }
  };
  return (
    <div className="TopLabelContainer_DetailPost">
      <div className="topTopLabel_DetailPost">
        <div className="topLeftTopLabel_DetailPost">
          <p>[{Topic}]</p>
          <p>{Title}</p>
        </div>
        <div className="topRightTopLabel_DetailPost">
          <a>
            <BorderOutlined />
          </a>
          <p>7</p>
          <a>
            <BorderOutlined />
          </a>
          <p>7</p>
          <a>
            <BorderOutlined />
          </a>
          <p>3</p>
        </div>
      </div>
      <div className="bottomTopLabel_DetailPost">
        <div className="bottomLeftTopLabel_DetailPost">
          <a>
            <BorderOutlined />
          </a>
          <p>나 효은이다</p>
          <p>복무 중</p>
          <p>|</p>
          <p>{moment(CreatedAt).format("YY[.]M[.]D")}</p>
          <p>/</p>
          <p>{moment(CreatedAt).format("HH[:]MM")}</p>
        </div>
        <div className="bottomRightTopLabel_DetailPost">
          <p>목록</p>
          <p>/</p>
          <p>글쓰기</p>{" "}
        </div>
      </div>
      <div className="partitionTopLabel_DetailPost" />
    </div>
  );
}

export default TopLabel;
