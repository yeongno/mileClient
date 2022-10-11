import { BorderOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/BottomSection.scss";
function BottomSection() {
  const Post = useSelector((state) => state.post.postOne);
  const [Content, setContent] = useState("");
  // console.log(Post[0]);
  useEffect(() => {
    fetchPostList();
  }, [Post]);
  const fetchPostList = () => {
    if (Post) {
      setContent(Post[0].content);
    }
  };
  return (
    <div className="bottomSectionContainer_DetailPost">
      <div className="leftContainer_DetailPost">
        <div className="imgContainer_DetailPost">
          <img
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjZfMTky%2FMDAxNjY0MTYyNTkyMDE5.PFXl29RSGBnJXT-7Fi43jIg97o7r2Kp8DmwiWaX9_Hwg.6ngxvHS4KyeENjnuXGUPpKEN30YX2X8nLh_gp01pwlgg.JPEG.beteu69%2Fgroup_1_2.jpg&type=a340"
            alt=""
          />
        </div>
        <div className="contentContainer_DetailPost">{Content}</div>
        <div className="likeContainer_DetailPost">
          <a>
          좋아요 
            </a>
            <a>
            <BorderOutlined/> 
            </a>
            <a>
              43
            </a>
        </div>
      </div>
      
      <div className="banner_DetailPost"></div>
    </div>
  );
}

export default BottomSection;