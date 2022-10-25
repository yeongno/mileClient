//댓글에 달린 답글들을 랜더링 하기 위한 컴포넌트

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/CommunityPage/DetailPost/ReplySection.scss";
import moment from "moment";
import { useParams } from "react-router-dom";
import "moment/locale/ko";

function ReplyRendering1(props) {
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

  //답글을 다는 대상이 되는 댓글의 작성자 이름
  const [ReplyName, setReplyName] = useState("");

  //답글이 달릴 해당 상위 댓글의 인덱스 값 (해당 커멘드 넘버)
  const [comNum, setComNum] = useState(null);

  //댓글/답글 을 가져오기 위한 객체
  const Reply1 = useSelector((state) => state.reply.getReply);

  //moment 라이브러리를 사용하여 포맷하여 날짜/시간 값 사용
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
           <div className="activReplyReplySection_DetailPost"></div>
          <div className="profileReplySection_DetailPost">
      
            <img src={"/assets/profile.png"} />
          </div>
          <div className="detailReplySection_DetailPost">
            <a>              {UserName}
      </a>
            <a>복무중</a>
            <br />
            <span>
      
                  @{ReplyName} 
                  </span>    
              <a>{Content}</a>
          </div>
        </div>
      
        <div className="bottomeReplySection_DetailPost">
 <div className="activReplyReplySection_DetailPost"></div>
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