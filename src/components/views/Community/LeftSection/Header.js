import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/CommunityPage/LeftSection/Header.scss";
function Header(props) {
  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/writePost");
  };
  const goWhole = (topic) => {
    props.setThisTopic(topic);
    navigate("/community");
  };
  const goNotice = (topic) => {
    props.setThisTopic(topic);
  };
  const goFavorite = (topic) => {
    props.setThisTopic(topic);
  };
  const goFree = (topic) => {
    props.setThisTopic(topic);
  };
  const goBoast = (topic) => {
    props.setThisTopic(topic);
  };
  const goQuestion = (topic) => {
    props.setThisTopic(topic);
  };
  const goReview = (topic) => {
    props.setThisTopic(topic);
  };

  return (
    <div className="containerHeader_LeftSection">
      <p>전체 게시판</p>
      <div className="partitionHeader_LeftSection" />
      <p
        onClick={() => {
          goWhole("whole");
        }}
      >
        전체
      </p>
      <div className="partitionHeader_LeftSection" />

      <p
        onClick={() => {
          goNotice("notice");
        }}
      >
        공지
      </p>
      <div className="partitionHeader_LeftSection" />
      <p
        onClick={() => {
          goFavorite("favorite");
        }}
      >
        인기
      </p>
      <div className="partitionHeader_LeftSection" />
      <p
        onClick={() => {
          goFree("free");
        }}
      >
        자유
      </p>
      <div className="partitionHeader_LeftSection" />
      <p
        onClick={() => {
          goQuestion("question");
        }}
      >
        질문
      </p>
      <div className="partitionHeader_LeftSection" />
      <p
        onClick={() => {
          goBoast("boast");
        }}
      >
        자랑
      </p>
      <div className="partitionHeader_LeftSection" />
      <p
        onClick={() => {
          goReview("review");
        }}
      >
        후기
      </p>
      <div className="partitionHeader_LeftSection" />
      <p onClick={goWrite}>글쓰기</p>
    </div>
  );
}

export default Header;
