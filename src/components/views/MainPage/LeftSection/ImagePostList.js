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
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
        <div className="space_inner">
          <div className="eachCard_container">
            <img src={"/assets/profile.png"} />
            <a>제목이다냥sidsidisid</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePostList;
