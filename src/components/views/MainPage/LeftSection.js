import React from "react";
import DivisionPostList from "./LeftSection/DivisionPostList";
import FavoritePostList from "./LeftSection/FavoritePostList";
import ImagePostList from "./LeftSection/ImagePostList";
import FreedomPostList from "./LeftSection/FreedomPostList";

function LeftSection() {
  return (
    <div>
      <FavoritePostList />
      <ImagePostList />
      <FreedomPostList />
      <DivisionPostList />
    </div>
  );
}

export default LeftSection;
