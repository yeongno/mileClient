import axios from "axios";
import React, { useEffect, useState } from "react";
import ReplyOnRendering from "./ReplyOnRendering";
import { useSelector } from "react-redux";

function ReplyRendering(props) {
    const Post = useSelector((state) => state.post.postOne);
    const [UserImg, setUserImg] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserFrom, setUserFrom] = useState("");
  const [Content, setContents] = useState("");
  const [CreatedAt, setDate] = useState("");
  const [OnReply, setOnReply] = useState(false);

  useEffect(() => {

    fetchUserList();
  }, [Post]);
  const fetchUserList = () => {
    axios
      .post("/api/reply/getReply", {
        postFrom: props.reply.postFrom,
      })
      .then((response) => {
        if (response.data.req[0]) {
          setUserImg(response.data.req[props.index].proFileImg);
          setUserName(response.data.req[props.index].userName);
          setUserFrom(response.data.req[props.index].userFrom);
          setContents(response.data.req[props.index].content);
          setDate(response.data.req[props.index].createdAt);
          setOnReply(true);
        } else {
          setOnReply(false);
        }
      });
  };
  return (
    <div>
      {OnReply && (
        <ReplyOnRendering
          UserFrom={UserFrom}
          UserImg={UserImg}
          CreatedAt={CreatedAt}
          Content={Content}
          UserName={UserName}
        />
        // <img
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
        // />
      )}
    </div>
  );
}

export default ReplyRendering;