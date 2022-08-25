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
          alert("isAdmin", response.payload.isAdmin);
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
