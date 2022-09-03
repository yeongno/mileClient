import { CloudSyncOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "../../../styles/MainPage/RightSection/MyPet.scss";

function MyPet() {
  return (
    <div className="myPet_container">
      <div className="myPet_inner">
        <div className="header_myPet">
          <a>내 펫</a>
          <span>D-349</span>
        </div>
        <div className="image_myPet">
          <div>
            <img src={"/assets/profile.png"} />
          </div>
        </div>
        <div className="name_myPet">
          <a>효은이</a>
          <img src="/assets/commons/retweet.png" alt="" />
        </div>
        <div className="detail_myPet">
          <a>ATK 30 / DEF 23</a>
        </div>
        <div className="expBar_myPet">
          <div></div>
        </div>
        <div className="partition_MyPet"></div>
        <div className="btn_myPet">
          <button>키우러 가기</button>
        </div>
      </div>
    </div>
  );
}

export default MyPet;
