import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";
import moment from "moment";
import { useParams } from "react-router-dom";
import "moment/locale/ko";

function ReplyRendering(props) {
  const postId = useParams().postId;

    const Post = useSelector((state) => state.post.postOne);
    const [UserImg, setUserImg] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserFrom, setUserFrom] = useState("");
  const [Content, setContents] = useState("");
  const [CreatedAt, setDate] = useState("");
  const [OnReply, setOnReply] = useState(false);
  const Reply1 = useSelector((state) => state.reply.getReply);
  const createdDate = moment(CreatedAt);

  useEffect(() => {

    fetchUserList();
  }, [postId]);
  const fetchUserList = () => {
   
          setUserImg(Reply1.req[props.index].proFileImg);
          setUserName(Reply1.req[props.index].userName);
          setUserFrom(Reply1.req[props.index].userFrom);
          setContents(Reply1.req[props.index].content);
          setDate(Reply1.req[props.index].createdAt);
  };
  const onReply=()=>{
    props.setReplyName(Reply1.req[props.index].userName)
  }
  return (
    <div>
     
        {/* <ReplyOnRendering
          UserFrom={UserFrom}
          UserImg={UserImg}
          CreatedAt={CreatedAt}
          Content={Content}
          UserName={UserName}
        /> */}
         <div className="ReplySectionContainer_DetailPost">

<div className="replyListReplySection_DetailPost">
  <div className="topReplySection_DetailPost">
    <div className="profileReplySection_DetailPost">
      <img src={"/assets/profile.png"} />
    </div>
    <div className="detailReplySection_DetailPost">
      <a>              {UserName}
</a>
      <a>복무중</a>
      <br />
      <a>{Content}</a>
    </div>
  </div>
  <div className="bottomeReplySection_DetailPost">
    <a onClick={onReply}>답글쓰기</a>
    <a>{moment(createdDate).fromNow()}</a>
  </div>
</div>
<div className="subPartitionReplySection_DetailPost" />
</div>
        
        {/* // <img
        //   style={{
        //     width: "5%",
        //     height: "5%",
        //     border: "1px solid lightgray",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     borderRadius: "50px",
        //     boxShadow: "1px 1px 1px 1px inset",
        //   }}
        //   src={`http://localhost:5000/${UserImg}`}
        //   alt="프로필"
        // /> */}
    </div>
  );
}

export default ReplyRendering;