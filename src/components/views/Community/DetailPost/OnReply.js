import { MessageOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReplyRendering from "./ReplyRendering";

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
      style={{
        width: "100%",
        position: "relative",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <div style={{ height: "86%" }}>
        {/* reply rendering zone */}
        <div>{OnReply && <div>{renderCards}</div>}</div>
      </div>
      <div
        style={{
          width: "70%",
          paddingTop: "1%",
          paddingBottom: "0.5%",
        }}
      >
        <div
          // reply submit zone
          style={{
            display: "flex",
            width: "100%",
            marginLeft: "2%",
            marginRight: "2%",
          }}
        >
         
          <Input
            style={{
          background: "#fbfbfb",
          width: "90%",
              marginRight: "5%",
              marginLeft: "2%",
              wordBreak: "break-all",
            }}
            placeholder="댓글을 입력하세요"
            onChange={onContentHandler}
            onPressEnter={onSubmit}
            value={Contentset}
          />
        </div>
        <span style={{ marginLeft: "11%", color: "white" }}>
          글을 게시하려면 Enter 키를 누르세요.
        </span>
      </div>
    </div>
  );
}
export default OnReply;