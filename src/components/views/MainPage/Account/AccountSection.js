import { CheckOutlined, DollarOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import "../../../styles/MainPage/Account.scss";
import { Switch } from "antd";

function AccountSection() {
  const Name = useSelector((state) => state.user.name);
  // const Name = window.localStorage.getItem("name");
  return (
    <div className="container_account">
      <div className="top_account">
        <div className="leftTop_account">
          <img src="/assets/profile.png" alt="" />
        </div>
        <div className="rightTop_account">
          <div className="nameLabel_account">
            <CheckOutlined /> <a className="nameLabel1">{Name}</a>
            <a className="nameLabel2">복무 중</a>
          </div>
          <hr />
          <div className="pointLabel_account">
            <div className="realMoney_pointLabel">
              <DollarOutlined />
              <a>320</a>
            </div>
            <div className="freeMoney_pointLabel">
              <DollarOutlined />
              <a>1203</a>
            </div>
            <div className="btn_getCash">
              <PlusOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className="down_account">
        <div className="leftDown_account">
          <a
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "gray",
              marginRight: "4px",
              marginTop: "2px",
            }}
          >
            익명 활성화
          </a>
          <Switch size="small" />
        </div>
        <div className="rightDown_account">
          <button>회원정보 변경</button>
          {" / "}
          <button>로그 아웃</button>
        </div>
      </div>
    </div>
  );
}

export default AccountSection;
