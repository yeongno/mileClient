import { MessageOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReplyRendering from "./ReplyRendering";
import "../../../styles/CommunityPage/DetailPost/OnReply.scss"

function OnReply(props) {
    const Post = useSelector((state) => state.post.postOne);
    const [replyOpen, setreplyOpen] = useState(false);
    const [PostId, setPostId] = useState("");
    const user = useSelector((state) => state.user);
  const [FilePath, setFilePath] = useState("");
  const [UserImg, setUserImg] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserFrom, setUserFrom] = useState("");
  const [Contentset, setContents] = useState("");
  const [Reply, setReply] = useState([]);
  const [OnReply, setOnReply] = useState(false);
  const userId = user.userData?._id;
  const userName = user.userData?.name;
  const onContentHandler = (event) => {
    setContents(event.currentTarget.value);
  };
  const onSubmit = () => {

    if (Contentset) {
      axios
        .post("/api/reply/setReply", {
          userFrom: userId,
          postFrom: PostId,
          proFileImg: FilePath,
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
  }, [Post]);
  const fetchUserList = () => {
    if (Post) {
        setPostId(Post[0]._id);
      }
    axios
      .post("/api/users/getProFile", {
        userFrom: userId,
      })
      .then((response) => {
        if (response.data.success) {
          setFilePath(response.data.userInfo[0].proFileImg);
        } else {
          alert("유저 정보를 가져오는데 실패하였습니다.");
        }
      });

    axios
      .post("/api/reply/getReply", {
        postFrom: PostId,
      })
      .then((response) => {
        if (response.data.req[0]) {
          setUserImg(response.data.req[0].proFileImg);
          setUserName(response.data.req[0].userName);
          setUserFrom(response.data.req[0].userFrom);
          setReply(response.data.req);
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
          <ReplyRendering reply={reply} index={index} />
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