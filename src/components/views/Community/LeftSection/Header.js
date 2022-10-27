import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/CommunityPage/LeftSection/Header.scss";
function Header(props) {
  

  //todo 
  //class 이름 Title이랑 바꾸기
  const navigate = useNavigate();
  const [Topic, setTopic] = useState("전체");
  const [Title, setTitle] = useState("전체");
  useEffect(() => {
    if(
      props.onClass === "public"
    ) setTitle("전체")
    if(
      props.onClass === "division"
    ) setTitle("사단")
  }, [props.onClass])

  
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
      {Topic === "전체" && <p className="activeHeader_LeftSection">전체</p>}
      {Topic !== "전체" && (
        <p
          onClick={() => {
            goWhole("whole");
            setTopic("전체");
          }}
        >
          전체
        </p>
      )}
      <div className="partitionHeader_LeftSection" />
      {Topic === "공지" && <p className="activeHeader_LeftSection">공지</p>}
      {Topic !== "공지" && (
        <p
          onClick={() => {
            goNotice("notice");
            setTopic("공지");
          }}
        >
          공지
        </p>
      )}
      <div className="partitionHeader_LeftSection" />
      {Topic === "인기" && <p className="activeHeader_LeftSection">인기</p>}
      {Topic !== "인기" && (
        <p
          onClick={() => {
            goFavorite("favorite");
            setTopic("인기");
          }}
        >
          인기
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Topic === "자유" && <p className="activeHeader_LeftSection">자유</p>}
      {Topic !== "자유" && (
        <p
          onClick={() => {
            goFree("free");
            setTopic("자유");
          }}
        >
          자유
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Topic === "질문" && <p className="activeHeader_LeftSection">질문</p>}
      {Topic !== "질문" && (
        <p
          onClick={() => {
            goQuestion("question");
            setTopic("질문");
          }}
        >
          질문
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Topic === "자랑" && <p className="activeHeader_LeftSection">자랑</p>}
      {Topic !== "자랑" && (
        <p
          onClick={() => {
            goBoast("boast");
            setTopic("자랑");
          }}
        >
          자랑
        </p>
      )}{" "}
      <div className="partitionHeader_LeftSection" />
      {Topic === "후기" && <p className="activeHeader_LeftSection">후기</p>}
      {Topic !== "후기" && (
        <p
          onClick={() => {
            goReview("review");
            setTopic("후기");
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
