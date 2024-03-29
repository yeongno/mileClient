import React from "react";
import "../../../styles/MainPage/RightSection/PowerRank.scss";
function PowerRank() {
  return (
    <div className="powerRank_conateiner">
      <div className="powerRank_spaceInner">
        <div className="powerRank_inner">
          <a className="title_powerRank">펫 전투력 랭킹</a>
          <div className="partition_powerRank" />
          <div className="board_container">
            <div className="eachCard_inner">
              <a>1위 나의 펫 </a>
            </div>
            <div className="eachCard_inner">
              <a>2위 튼튼이 </a>
              <div className="eachCard_inner">
                <a>3위 화룡이 </a>
              </div>
              <div className="eachCard_inner">
                <a>4위 구형아 </a>
              </div>
              <div className="eachCard_inner">
                <a>5위 호준이 </a>
              </div>
              <div className="eachCard_inner">
                <a>6위 강남이 </a>
              </div>
              <div className="eachCard_inner">
                <a>7위 팔남이 </a>
              </div>
              <div className="eachCard_inner">
                <a>8위 구남이 </a>
              </div>
            </div>
            <div className="partition_powerRank" />
            <div className="bottom_powerRank">
              <button>내 펫 키우러 가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerRank;
