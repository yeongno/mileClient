import React from "react";
import "../../styles/MainPage/MainPage.scss";
import Account from "./Account";
import LeftSection from "./LeftSection";
import DivisionPostList from "./LeftBottom/DivisionPostList";
import Notice from "./Notice";
import RankingBoard from "./RankingBoard";
import RightSection from "./RightSection";
import RightBottom from "./RightBottom";
function MainPage() {
  //NavBar에서 useEffect로 해당 컴포넌트 초기 실행
  return (
    <div className="main_container">
      <div className="inner_container_pc">
        <div className="header_container">
          <div className="notice_section">
            <Notice />
          </div>
          <div className="account_section">
            <Account />
          </div>
        </div>
        <div className="body_container">
          <div className="left_section">
            <LeftSection />
          </div>
          <div className="right_section">
            <RightSection />
          </div>
        </div>
        <div>
          <div className="bottom_container">
            <div className="topBottom_section">
              <RankingBoard />
            </div>
            <div className="leftBottom_section">
              <DivisionPostList />
            </div>
            <div className="rightBottom_section">
              <RightBottom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
