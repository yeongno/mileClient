import { Input } from "antd";
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";
import { BorderOutlined } from "@ant-design/icons";
function ReplyOnRendering(props) {
  const userFrom = props.UserFrom;
  const UserImg = props.UserImg;
  const createdAt = props.CreatedAt;
  const content = props.Content;
  const userName = props.UserName;
  const createdDate = moment(createdAt);

  return (
    <div>
     
      <div className="ReplySectionContainer_DetailPost">

      <div className="replyListReplySection_DetailPost">
        <div className="topReplySection_DetailPost">
          <div className="profileReplySection_DetailPost">
            <img src={"/assets/profile.png"} />
          </div>
          <div className="detailReplySection_DetailPost">
            <a>              {userName}
</a>
            <a>복무중</a>
            <br />
            <a>{content}</a>
          </div>
        </div>
        <div className="bottomeReplySection_DetailPost">
          <a>답글쓰기</a>
          <a>{moment(createdDate).fromNow()}</a>
        </div>
      </div>
      <div className="subPartitionReplySection_DetailPost" />
    </div>
    </div>
  );
}

export default ReplyOnRendering;