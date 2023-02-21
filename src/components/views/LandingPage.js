import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    axios
      .post("/api/users/login", {
        email: "admin@naver.com",
        password: "admin",
      })
      .then((res) => console.log("res", res));
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LandingPage;
