import { CheckOutlined, DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../styles/MainPage/Account.scss";
import { Switch } from "antd";
import { logout } from "../../../../redux/_actions/user_action";

function AccountSection() {
  const Name = useSelector((state) => state.user.name);
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goLogout = () => {
    dispatch(logout());
  };
  const goLogIn = () => {
    navigate("/login");
  };
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
          {isAuth && <button onClick={goLogout}>로그 아웃</button>}
          {!isAuth && <button onClick={goLogIn}>로그인</button>}
        </div>
      </div>
    </div>
  );
}

export default AccountSection;
