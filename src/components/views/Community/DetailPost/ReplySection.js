import { BorderOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";
import OnReply from "./OnReply";

function ReplySection() {
  const Reply = useSelector((state) => state.reply.getReply?.req);
  return (
    <div className="ReplySectionContainer_DetailPost">
      <div className="topLabelReplySection_DetailPost">
        <a>댓글</a>
        <a>{Reply?.length}</a>
        <a>최신순</a>
        <a>
          <BorderOutlined />
        </a>
      </div>
      <div className="partitionReplySection_DetailPost" />

      <OnReply />
    </div>
  );
}

export default ReplySection;
