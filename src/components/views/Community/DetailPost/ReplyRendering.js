import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";
import moment from "moment";
import { useParams } from "react-router-dom";
import "moment/locale/ko";
import ReplyRendering1 from "./ReplyRendering1";
import { Col } from "antd";

function ReplyRendering(props) {
  const postId = useParams().postId;

    const Post = useSelector((state) => state.post.postOne);
    const [UserImg, setUserImg] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserFrom, setUserFrom] = useState("");
  const [Content, setContents] = useState("");
  const [CreatedAt, setDate] = useState("");
  const [ReplyName, setReplyName] = useState("");
  const [NowIndex, setNowIndex] = useState(null);

  const [OnReply, setOnReply] = useState(false);
  //onReply의 comNum와 비교할 값이며 해당 커멘드 넘버
  const [comNum, setComNum] = useState(null);
  const Reply1 = useSelector((state) => state.reply.getReply);
  const Reply2 = useSelector((state) => state.reply.getReply.req);
  const createdDate = moment(CreatedAt);

  useEffect(() => {

    fetchUserList();
  }, [postId]);
  const fetchUserList = () => {

    setNowIndex(props.index)
          setUserImg(Reply1.req[props.index].proFileImg);
          setUserName(Reply1.req[props.index].userName);
          setUserFrom(Reply1.req[props.index].userFrom);
          setContents(Reply1.req[props.index].content);
          setReplyName(Reply1.req[props.index].replyName);
          setComNum(Reply1.req[props.index].comNum);
          setDate(Reply1.req[props.index].createdAt);
         
  };

 const renderCards = Reply2.map((reply, index) => {
  return (

    <Col key={index}>
 
       <div>
        <ReplyRendering1 reply={reply} index={index} setReplyName={setReplyName} setReplyFrom={props.setReplyFrom}
        NowIndex={NowIndex}
       />
        {/* {reply.length} */}
      </div>
    
     
    </Col>
  );
});
  const onReply=()=>{
    props.setReplyFrom(UserFrom)
    props.setReplyName(UserName)
    props.setComNum(props.index);
    // alert(Reply1.req[props.index].comNum)

    props.setRepNum(props.index)

    // props.setComNum(props.index)
    // alert(props.comNum)

    // console.log(UserFrom);
  }
  return (
    <div>
      {
        (comNum === null) &&(
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
                <span>
          
                      </span>    
                  <a>{Content}</a>
              </div>
            </div>
          
            <div className="bottomeReplySection_DetailPost">
              <a onClick={onReply}>답글쓰기</a>
              <a>{moment(createdDate).fromNow()}</a>
            </div>
          </div>
          <div className="subPartitionReplySection_DetailPost" />
          {renderCards}
          </div>
          
        )
      }
     
    </div>
  );
}

export default ReplyRendering;