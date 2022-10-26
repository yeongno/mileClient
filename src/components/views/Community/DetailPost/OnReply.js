//댓글 기능에 있어 값을 불러오고 값을 세팅하는 최상위 컴포넌트

import { CloseSquareOutlined, MessageOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input } from "antd";
import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReplyRendering from "./ReplyRendering";
import "../../../styles/CommunityPage/DetailPost/OnReply.scss"
import { getReply } from "../../../../redux/_actions/reply_action";
import { useParams } from "react-router-dom";
import useMoveScroll from "../../../../hook/useMoveScroll";
function OnReply(props) {

  const [replyName, setReplyName] = useState(null)
  const [replyFrom, setReplyFrom] = useState(null)

  //답글이 달릴 해당 상위 댓글의 인덱스 값 (해당 커멘드 넘버)
  const [comNum, setComNum] = useState(null)

  const postId = useParams().postId;

  //유저 데이터 객체 값 사용
  const user = useSelector((state) => state.user);
  const userId = user.userData?._id;
  const userName = user.userData?.name;

  // const [FilePath, setFilePath] = useState("");

  //댓글/답글 세팅하고 있는 내용
  const [Contentset, setContents] = useState("");

  //댓글/답글을 불러오기 위한 객체
  const [Reply, setReply] = useState([]);
  
  //댓글이 있음 없음을 체크
  const [OnCom, setOnCom] = useState(false);

  //답글 클릭 시 스크롤 위치
  const [scrollNow, setScrollNow] = useState()

  const dispatch = useDispatch();
  const onContentHandler = (event) => {
    setContents(event.currentTarget.value);
  };
 

  useEffect(() => {
    fetchUserList();

  }, [postId]);
  const fetchUserList = () => {

    dispatch(getReply({postFrom:postId}))
    .then((response) => {
        if (response.payload.req[0]) {
          // setUserImg(response.payload.req[0].proFileImg);
          setReply(response.payload.req);
          setOnCom(true);
        } else {
          setOnCom(false);
        }
      });
    setComNum(null)

  };
  const onSubmit = () => {

    //답글달기 전의 위치로 이동
    if(scrollNow){
      window.scrollTo(0,scrollNow)
    }

    if (Contentset) {
      axios
        .post("/api/reply/setReply", {
          userFrom: userId,
          postFrom: postId,
          replyFrom: replyFrom,
          // proFileImg: FilePath,
          content: Contentset,
          userName,
          comNum,
          replyName,
        })
        .then((response) => {
          // alert(comNum)

          if (!response.data.success) {
            // console.log( response)
          }
        });
      setContents("");
    setComNum(null)
    setReplyName("");
    setScrollNow(null);

    }
    setTimeout(() => {
    fetchUserList();

    }, 500);
  };
  const renderCards = Reply.map((reply, index) => {
    return (
      <Col key={index}>
        <div>
          <ReplyRendering reply={reply} index={index} setReplyName={setReplyName} setReplyFrom={setReplyFrom}
           setComNum={setComNum} setScrollNow={setScrollNow}/>
          {reply.length}
        </div>
      </Col>
    );
  });

  //답글 달기 취소
  const OffReply = ()=>{
    setReplyName("");
    window.scrollTo(0,scrollNow)
  }

  return (
    <div>

  <div
    className="OnReplyContainer_DetailPost"
   
    >
      <div className="renderingContainer_DetailPost">
        {/* reply rendering zone */}
        <div>{OnCom&& <div>
            {renderCards}
           </div>}</div>
      </div>
      <div
      className="submitOnReply_DetailPost"
      >
        <div
          className="submitContainerOnReply_DetailPost"
        >
          {
            replyName &&(
              <div>
              {replyName}<CloseSquareOutlined onClick={OffReply}/>
                </div>


            )
          }
          <Input
          className="inputOnReply_DetailPost"
            id="inputOnReply_DetailPost"
            placeholder="댓글을 입력하세요"
            onChange={onContentHandler}
            onPressEnter={onSubmit}
            value={Contentset}
          />
        </div>
        <div className="bottomContainerOnReply_DetailPost"

        >
          글을 게시하려면 Enter 키를 누르세요.
        </div>
      </div>
    </div>
    </div>
  
  );
}
export default OnReply;