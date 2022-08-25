import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminPage/Selector.scss";

function Selector() {
  const navigate = useNavigate();
  const onUserList = () => {
    navigate("/adminPage/userManagement");
  };
  const onPostList = () => {
    navigate("/adminPage/postManagement");
  };
  return (
    <div className="container_manage">
      <div className="manage_left">
        <button onClick={onUserList} className="user">
          유저 관리
        </button>
        <button onClick={onPostList} className="post">
          공지사항 관리
        </button>
      </div>
    </div>
  );
}

export default Selector;
