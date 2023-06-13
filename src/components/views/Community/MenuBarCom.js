import { UsbOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { turnMenu } from "../../../redux/_actions/turn_action";
import "../../styles/CommunityPage/MenuBarCom.scss";

function MenuBarCom(props) {
  const dispatch = useDispatch();
  return (
    <div className="MenuBarCom_container">
      <div className="roof_MenuBarCom"></div>
      <div className="leftMenuBarCom_container">
        <button onClick={()=>{
          props.setClass("public")
          dispatch(turnMenu("COMMUNITY_MENU"));

        }}>전체</button>
        <div className="partition_MenuBarCom" 
   
        />
        <button      onClick={()=>{
          props.setClass("division");
          dispatch(turnMenu("DIVISION_MENU"));
        }}>사단/근무지</button>
        <div className="partition_MenuBarCom" />
        <button>펫</button>
        <div className="partition_MenuBarCom" />
        <button>멘토/멘티</button>
      </div>
      <div className="rightMenuBarCom_container">
        <div className="rightMenuBarCom_inner">
          <UsbOutlined />
          <a>나 효은이다 님</a>
          <UsbOutlined />
          <div className="partition_MenuBarCom"></div>
          <UsbOutlined />
          <span>3789개</span>
          <UsbOutlined />
        </div>
      </div>
    </div>
  );
}

export default MenuBarCom;
