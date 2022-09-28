import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/TopLabel.scss";

function TopLabel() {
  const Post = useSelector((state) => state.post.postOne);
  const [Title, setTitle] = useState("");
  const [Topic, setTopic] = useState("");
  // console.log(Post[0]);
  useEffect(() => {
    fetchPostList();
  }, [Post]);
  const fetchPostList = () => {
    if (Post) {
      setTitle(Post[0].title);
      setTopic(Post[0].topic);
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
          <p>{Title}</p>
          <p>{Title}</p>
          <p>{Title}</p>
        </div>
      </div>
      <div className="bottomeTopLabel_DetailPost">
        <div className="bottomeLeftTopLabel_DetailPost">
          <p>{Title}</p>
          <p>{Title}</p>
        </div>
        <div className="bottomeRightTopLabel_DetailPost">
          <p>{Title}</p>
          <p>{Title}</p>{" "}
        </div>
      </div>
      <div className="partitionTopLabel_DetailPost" />
    </div>
  );
}

export default TopLabel;
