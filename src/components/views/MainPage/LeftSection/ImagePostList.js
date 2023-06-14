import React from "react";
import { Col, Row } from "antd";
import NameBar from "../commons/NameBar";
import "../../../styles/MainPage/ImagePostList.scss";
function ImagePostList() {
  return (
    <div
      className="
    imagePostList_container
    "
    >
      <NameBar name="이미지 게시글" url="/FavoritePostList" />
      <div className="imagePostList_inner">
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목1</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목2</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목3</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목4</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목5</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목6</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목7</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목8</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목9</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목10</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePostList;
