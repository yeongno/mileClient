// import { response } from "express";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../redux/_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false => 로그인 안한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (response.payload.isAdmin) {
          //todo 한번씩 localStorage의 값이 변경 안됨.
          //관리자 페이지에서 로그아웃 하면 관리자페이지 영역이 그대로 남아 있음
          //hoc를 사용한 auth 또한 각기 컴포넌트들에 제약 걸기
        } else {
        }
        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          } else {
            //로그인한 상태
            if (adminRoute && !response.payload.isAdmin) {
            } else {
              if (option === false) navigate("/login");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
