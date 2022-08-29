import { CheckOutlined } from "@ant-design/icons";
import React from "react";
import "../../../styles/MainPage/Account.scss";

function AccountSection() {
  const Name = window.localStorage.getItem("name");
  return (
    <div className="container_account">
      <div className="top_account">
        <div className="leftTop_account">
          <img src="/assets/profile.png" alt="" />
        </div>
        <div className="rightTop_account">
          <div className="nameLabel_account">
            <CheckOutlined />
            {Name}{" "}
          </div>
          <hr />
          <div className="pointLabel_account">pointLabel_account</div>
        </div>
      </div>
      <div className="down_account">
        <div className="leftDown_account">익명 활성화</div>
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
