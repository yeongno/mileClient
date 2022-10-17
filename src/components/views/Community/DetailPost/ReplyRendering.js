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
  const Reply1 = useSelector((state) => state.reply.getReply);

  useEffect(() => {

    fetchUserList();
  }, [Post]);
  const fetchUserList = () => {
   
          setUserImg(Reply1.req[props.index].proFileImg);
          setUserName(Reply1.req[props.index].userName);
          setUserFrom(Reply1.req[props.index].userFrom);
          setContents(Reply1.req[props.index].content);
          setDate(Reply1.req[props.index].createdAt);
  };
  return (
    <div>
     
        <ReplyOnRendering
          UserFrom={UserFrom}
          UserImg={UserImg}
          CreatedAt={CreatedAt}
          Content={Content}
          UserName={UserName}
        />
        
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