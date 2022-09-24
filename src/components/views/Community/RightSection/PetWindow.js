import React from "react";
import "../../../styles/CommunityPage/RightSection/PetWindow.scss";

function PetWindow() {
  return (
    <div className="petWindowContainer_ListSection">
      <div className="headerPetWindow_ListSection">
        <p>내 펫</p>
        <p>효은이</p>
        <p>D-546</p>
      </div>
      <div className="centerPetWindow_Listsection">
        <div className="leftPetWindow_ListSection">
          <img src="/assets/profile.png" alt="" />
        </div>
        <div className="statPetWindow_ListSection">
          <p>ATK</p>
          <p>DEF</p>
          <p>HP</p>
        </div>
        <div className="rightPetWindow_ListSection">
          <p>30</p>
          <p>30</p>
          <p>463/2307</p>
        </div>
      </div>
      <div className="partitionPetWindow_ListSection" />
      <div className="footerPetWindow_Listsection">
        <p>키우러 가기</p>
      </div>
    </div>
  );
}

export default PetWindow;
