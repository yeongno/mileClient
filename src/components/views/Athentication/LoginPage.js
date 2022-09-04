import {
  BorderOuterOutlined,
  QrcodeOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.scss";
import { auth, loginUser } from "../../../redux/_actions/user_action";
import { TURNON_SECTION } from "../../../redux/_actions/types";
import { MenuTurnOff, MenuTurnOn } from "../../../redux/_actions/turn_action";

function LoginPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    //로그인화면에서 menuBar를 비활성화
    dispatch(MenuTurnOff(true));
  }, []);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const navigate = useNavigate();
  const onRegister = () => {
    navigate("/register");
  };
  const onSubmitHandler = (event) => {
    dispatch(MenuTurnOff(false));
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      window.localStorage.setItem("userId", response.payload.userId);
      window.localStorage.setItem("name", response.payload.name);
      if (response.payload.loginSuccess) {
        dispatch(auth()).then((response) => {
          if (response.payload.isAdmin === true) {
            window.localStorage.setItem("Admin", true);
          }
        });
        navigate("/");
        window.location.reload("/");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <div className="wrapper">
      <div className="lwrap">
        <ul className="login_type">
          <Button className="bt1">
            <RightSquareOutlined />
            ID 로그인
          </Button>
          <Button className="bt2">
            <BorderOuterOutlined /> 1회용 로그인
          </Button>
          <Button className="bt3">
            <QrcodeOutlined />
            QR코드
          </Button>
        </ul>
        <div className="loginfrm">
          <form className="form" onSubmit={onSubmitHandler}>
            <input
              type="email"
              value={Email}
              onChange={onEmailHandler}
              placeholder="이메일"
              className="email"
            />
            <input
              type="password"
              value={Password}
              onChange={onPasswordHandler}
              placeholder="비밀번호"
              className="password"
            />
            <br />
            <button className="lobb " type="submit">
              로그인
            </button>
            <button className="lobb" onClick={onRegister}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
