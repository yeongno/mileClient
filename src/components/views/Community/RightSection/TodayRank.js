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
          <p>냥냥</p>
        </div>
        <div className="secondCardTodayRank_ListSection">
          <img src="/assets/profile.png" alt="" />
          <p>냥냥</p>
        </div>
      </div>
      <div className="restCardTodayRank_ListSection">
        <p>알려준다 이것 저것을 말여</p>
        <p>알려준다 이것 저것을 말여</p>
        <p>알려준다 이것 저것을 말여</p>
        <p>알려준다 이것 저것을 말여</p>
        <p>알려준다 이것 저것을 말여</p>
        <p>알려준다 이것 저것을 말여</p>
        <p>알려준다 이것 저것을 말여</p>
      </div>{" "}
    </div>
  );
}

export default TodayRank;
