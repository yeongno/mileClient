import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/CommunityPage/LeftSection/Header.scss";
function Header() {
  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/writePost");
  };
  return (
    <div className="containerHeader_LeftSection">
      <p>전체 게시판</p>
      <div className="partitionHeader_LeftSection" />
      <p>전체</p>
      <div className="partitionHeader_LeftSection" />

      <p>공지</p>
      <div className="partitionHeader_LeftSection" />
      <p>인기</p>
      <div className="partitionHeader_LeftSection" />
      <p>자유</p>
      <div className="partitionHeader_LeftSection" />
      <p>질문</p>
      <div className="partitionHeader_LeftSection" />
      <p>자랑</p>
      <div className="partitionHeader_LeftSection" />
      <p>후기</p>
      <div className="partitionHeader_LeftSection" />
      <p onClick={goWrite}>글쓰기</p>
    </div>
  );
}

export default Header;
