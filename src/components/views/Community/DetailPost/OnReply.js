import { MessageOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReplyRendering from "./ReplyRendering";
import "../../../styles/CommunityPage/DetailPost/OnReply.scss"
import { getReply } from "../../../../redux/_actions/reply_action";
import { useParams } from "react-router-dom";

function OnReply(props) {
  const [replyName, setReplyName] = useState("")
  const [replyFrom, setReplyFrom] = useState("")
  const postId1 = useParams().postId;
  const Post = useSelector((state) => state.post.postOne);
    const [PostId, setPostId] = useState("");
    const user = useSelector((state) => state.user);
  // const [FilePath, setFilePath] = useState("");
  const [Contentset, setContents] = useState("");
  const [Reply, setReply] = useState([]);
  const [OnReply, setOnReply] = useState(false);
  const userId = user.userData?._id;
  const userName = user.userData?.name;
  const dispatch = useDispatch();
  const Reply1 = useSelector((state) => state.reply.getReply);
  const onContentHandler = (event) => {
    setContents(event.currentTarget.value);
  };
  const onSubmit = () => {

    if (Contentset) {
      
      axios
        .post("/api/reply/setReply", {
          userFrom: userId,
          postFrom: PostId,
          replyFrom: replyFrom,
          // proFileImg: FilePath,
          content: Contentset,
          userName,
        })
        .then((response) => {
          if (response.data.success) {
          }
        });
      setContents("");
    }
    fetchUserList();
  };

  useEffect(() => {
    fetchUserList();

  }, [postId1]);
  const fetchUserList = () => {
    if (Post) {
        setPostId(Post[0]._id);
      }
    // axios
    //   .post("/api/users/getProFile", {
    //     userFrom: userId,
    //   })
    //   .then((response) => {
    //     if (response.data.success) {
    //       setFilePath(response.data.userInfo[0].proFileImg);
    //     } else {
    //       alert("유저 정보를 가져오는데 실패하였습니다.");
    //     }
    //   });
    setReplyName("");
    setReplyFrom("");

    dispatch(getReply({postFrom:postId1}))
    .then((response) => {
        if (response.payload.req[0]) {
          // setUserImg(response.payload.req[0].proFileImg);
          setReply(response.payload.req);
          setOnReply(true);
        } else {
          setOnReply(false);
        }
      });
  };
  const renderCards = Reply.map((reply, index) => {
    return (
      <Col key={index}>
        <div>
          <ReplyRendering reply={reply} index={index} setReplyName={setReplyName} setReplyFrom={setReplyFrom} />
          {reply.length}
        </div>
      </Col>
    );
  });

  return (
    <div
    className="OnReplyContainer_DetailPost"
   
    >
      <div className="renderingContainer_DetailPost">
        {/* reply rendering zone */}
        <div>{OnReply && <div>{renderCards}</div>}</div>
      </div>
      <div
      className="submitOnReply_DetailPost"
      >
        <div
          className="submitContainerOnReply_DetailPost"
        >
         {replyName}
          <Input
          className="inputOnReply_DetailPost"
            placeholder="댓글을 입력하세요"
            onChange={onContentHandler}
            onPressEnter={onSubmit}
            value={Contentset}
          />
        </div>
        <div className="bottomContainerOnReply_DetailPost">
          글을 게시하려면 Enter 키를 누르세요.
        </div>
      </div>
    </div>
  );
}
export default OnReply;