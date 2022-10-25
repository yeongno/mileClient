//댓글을 랜더링 하기 위한 컴포넌트

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

  const [UserImg, setUserImg] = useState("");

  //해당 유저 이름
  const [UserName, setUserName] = useState("");

  //해당 유저 id값
  const [UserFrom, setUserFrom] = useState("");

  //댓글 내용
  const [Content, setContents] = useState("");

  //댓글 생성 시간 값
  const [CreatedAt, setDate] = useState("");

  //불러온 댓글 중 해당 댓글의 인덱스 값
  const [NowIndex, setNowIndex] = useState(null);

  const [OnReply, setOnReply] = useState(false);

  //답글이 달릴 해당 상위 댓글의 인덱스 값 (해당 커멘드 넘버)
  const [comNum, setComNum] = useState(null);

  //댓글/답글 을 가져오기 위한 객체
  const Reply1 = useSelector((state) => state.reply.getReply.req);

  //moment 라이브러리를 사용하여 포맷하여 날짜/시간 값 사용
  const createdDate = moment(CreatedAt);

  useEffect(() => {

    fetchUserList();
  }, [postId]);
  const fetchUserList = () => {

    setNowIndex(props.index)
          setUserImg(Reply1[props.index].proFileImg);
          setUserName(Reply1[props.index].userName);
          setUserFrom(Reply1[props.index].userFrom);
          setContents(Reply1[props.index].content);
          // setReplyName(Reply1[props.index].replyName);
          setComNum(Reply1[props.index].comNum);
          setDate(Reply1[props.index].createdAt);
         
  };


 const renderCards = Reply1.map((reply, index) => {
  return (

    <Col key={index}>
 
       <div>
        <ReplyRendering1 reply={reply} index={index}  setReplyFrom={props.setReplyFrom}
        NowIndex={NowIndex}
       />
        {/* {reply.length} */}
      </div>
    
     
    </Col>
  );
});
const onMoveToElement1 = () => {
  document.getElementById("inputOnReply_DetailPost").scrollIntoView(false);
  //move.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
  const onReply=()=>{
    onMoveToElement1();
    // console.log(window.scrollY);
    props.setReplyFrom(UserFrom)
    props.setReplyName(UserName)
    props.setComNum(props.index);
    // alert(Reply1.req[props.index].comNum)

    // props.setRepNum(props.index)

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