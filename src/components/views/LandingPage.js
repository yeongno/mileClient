import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import instance from "../../axios";
import useMenuSelector from "../../hook/useMenuSelector";
import { turnMenu } from "../../redux/_actions/turn_action";

function LandingPage() {
  const menu = useMenuSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   // navigate("/mainPage")
  //   instance
  //     .post("/api/users/login", {
  //       email: "admin@naver.com",
  //       password: "admin",
  //     })
  //     .then((res) => console.log("res", res));
  // }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LandingPage;
