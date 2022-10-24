import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";
import moment from "moment";
import { useParams } from "react-router-dom";
import "moment/locale/ko";
import ReplyRendering from "./ReplyRendering";
import { Col } from "antd";

function ReplyRendering1(props) {
  const postId = useParams().postId;

    const Post = useSelector((state) => state.post.postOne);
    const [UserImg, setUserImg] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserFrom, setUserFrom] = useState("");
  const [Content, setContents] = useState("");
  const [CreatedAt, setDate] = useState("");
  const [ReplyName, setReplyName] = useState("");
  const [OnReply, setOnReply] = useState(false);
  //onReply의 comNum와 비교할 값이며 해당 커멘드 넘버
  const [comNum, setComNum] = useState(null);
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
          setComNum(Reply1.req[props.index].comNum);
          setReplyName(Reply1.req[props.index].replyName);
          setDate(Reply1.req[props.index].createdAt);
         
  };
 
  return (
    <div>
        {
          comNum === props.NowIndex &&(
            <div className="ReplySectionContainer_DetailPost">

      <div className="replyListReplySection_DetailPost">
      
        <div className="topReplySection_DetailPost">
        {
          comNum && <div className="activReplyReplySection_DetailPost"></div>
        }
          <div className="profileReplySection_DetailPost">
      
            <img src={"/assets/profile.png"} />
          </div>
          <div className="detailReplySection_DetailPost">
            <a>              {UserName}
      </a>
            <a>복무중</a>
            <br />
              {
                comNum &&(
            <span>
      
                  @{ReplyName} 
                  </span>    
                  )
              }
              <a>{Content}</a>
          </div>
        </div>
      
        <div className="bottomeReplySection_DetailPost">
        {
          comNum && <div className="activReplyReplySection_DetailPost"></div>
        }  
          <a>{moment(createdDate).fromNow()}</a>
        </div>
      </div>
      <div className="subPartitionReplySection_DetailPost" />
      </div>
          )

          
        }
      </div>
      
  
    
  );
}

export default ReplyRendering1;