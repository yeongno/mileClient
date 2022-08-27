import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/_actions/user_action";

function ReAuth() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);

  return <div></div>;
}

export default ReAuth;
