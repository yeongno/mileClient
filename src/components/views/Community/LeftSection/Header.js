import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/CommunityPage/LeftSection/Header.scss";
function Header(props) {
  const navigate = useNavigate();
  const [Title, setTitle] = useState("공용");
  const goWrite = () => {
    navigate("/writePost");
    props.setThisPaging(1);
  };
  const goWhole = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };
  const goNotice = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };
  const goFavorite = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };
  const goFree = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };
  const goBoast = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };
  const goQuestion = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };
  const goReview = (topic) => {
    props.setThisTopic(topic);
    props.setThisPaging(1);
  };

  return (
    <div className="containerHeader_LeftSection">
      <p>{Title} 게시판</p>
      <div className="partitionHeader_LeftSection" />
      {Title === "전체" && <p className="activeHeader_LeftSection">전체</p>}
      {Title !== "전체" && (
        <p
          onClick={() => {
            goWhole("whole");
            setTitle("전체");
          }}
        >
          전체
        </p>
      )}
      <div className="partitionHeader_LeftSection" />
      {Title === "공지" && <p className="activeHeader_LeftSection">공지</p>}
      {Title !== "공지" && (
        <p
          onClick={() => {
            goNotice("notice");
            setTitle("공지");
          }}
        >
          공지
        </p>
      )}
      <div className="partitionHeader_LeftSection" />
      {Title === "인기" && <p className="activeHeader_LeftSection">인기</p>}
      {Title !== "인기" && (
        <p
          onClick={() => {
            goFavorite("favorite");
            setTitle("인기");
          }}
        >
          인기
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Title === "자유" && <p className="activeHeader_LeftSection">자유</p>}
      {Title !== "자유" && (
        <p
          onClick={() => {
            goFree("free");
            setTitle("자유");
          }}
        >
          자유
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Title === "질문" && <p className="activeHeader_LeftSection">질문</p>}
      {Title !== "질문" && (
        <p
          onClick={() => {
            goQuestion("question");
            setTitle("질문");
          }}
        >
          질문
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Title === "자랑" && <p className="activeHeader_LeftSection">자랑</p>}
      {Title !== "자랑" && (
        <p
          onClick={() => {
            goBoast("boast");
            setTitle("자랑");
          }}
        >
          자랑
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Title === "후기" && <p className="activeHeader_LeftSection">후기</p>}
      {Title !== "후기" && (
        <p
          onClick={() => {
            goReview("review");
            setTitle("후기");
          }}
        >
          후기
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      <p onClick={goWrite}>글쓰기</p>
    </div>
  );
}

export default Header;
