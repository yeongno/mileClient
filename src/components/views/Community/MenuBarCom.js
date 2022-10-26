import { UsbOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import "../../styles/CommunityPage/MenuBarCom.scss";

function MenuBarCom(props) {
  return (
    <div className="MenuBarCom_container">
      <div className="roof_MenuBarCom"></div>
      <div className="leftMenuBarCom_container">
        <button onClick={()=>{
          props.setClass("public")
        }}>전체</button>
        <div className="partition_MenuBarCom" 
        onClick={()=>{
          props.setClass("division")
        }}
        />
        <button>사단/근무지</button>
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
