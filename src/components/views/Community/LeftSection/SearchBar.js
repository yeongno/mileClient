import { DownOutlined } from "@ant-design/icons";
import React from "react";
import "../../../styles/CommunityPage/LeftSection/SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchBarContainer_ListSection">
      <div className="leftSearchBar_ListSection">
        <p>제목</p>
        <div className="iconDown_SearchBar">
          <DownOutlined />
        </div>
        <div className="searchBarPartition_ListSection" />
      </div>
      <div className="rightSearchBar_ListSection">
        <img src="/assets/commons/searchOn.png" alt="" />
      </div>
    </div>
  );
}

export default SearchBar;
