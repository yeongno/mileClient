import { BorderOutlined } from "@ant-design/icons";
import React from "react";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";

function ReplySection() {
  return (
    <div className="ReplySectionContainer_DetailPost">
      <div className="topLabelReplySection_DetailPost">
        <a>댓글</a>
        <a>3</a>
        <a>최신순</a>
        <a>
          <BorderOutlined />
        </a>
      </div>
      <div className="partitionReplySection_DetailPost" />
      <div className="replyListReplySection_DetailPost">
        <div className="topReplySection_DetailPost">
          <div className="profileReplySection_DetailPost">
            <img src={"/assets/profile.png"} />
          </div>
          <div className="detailReplySection_DetailPost">
            <a>난 자갈치</a>
            <a>복무중</a>
            <br />
            <a>댓글이다.</a>
          </div>
        </div>
        <div className="bottomeReplySection_DetailPost">
          <a>답글쓰기</a>
          <a>2015.12:23</a>
        </div>
      </div>
      <div className="subPartitionReplySection_DetailPost" />
    </div>
  );
}

export default ReplySection;
