import React from "react";
import "../../../styles/CommunityPage/RightSection/TodayRank.scss";

function TodayRank() {
  return (
    <div className="todayRankContainer_ListSection">
      <div className="headerTodayRank_ListSection">
        <p>오늘의 인기글</p>
      </div>
      <div className="partitionTodayRank_ListSection" />
      <div className="topRankTodayRank_ListSection">
        <div className="firstCardTodayRank_ListSection">
          <img src="/assets/profile.png" alt="" />
          <p>콜록이</p>
        </div>
        <div className="secondCardTodayRank_ListSection">
          <img src="/assets/profile.png" alt="" />
          <p>튼튼이</p>
        </div>
      </div>
      <div className="restCardTodayRank_ListSection">
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
        <p>test4</p>
        <p>test5</p>
        <p>test6</p>
        <p>test7</p>
      </div>{" "}
    </div>
  );
}

export default TodayRank;
