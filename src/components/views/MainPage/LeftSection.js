import React from "react";
import FavoritePostList from "./LeftSection/FavoritePostList";
import ImagePostList from "./LeftSection/ImagePostList";

function LeftSection() {
  return (
    <div>
      <ImagePostList />
      <FavoritePostList />
    </div>
  );
}

export default LeftSection;
