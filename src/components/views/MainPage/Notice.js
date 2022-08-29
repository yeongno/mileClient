import React from "react";
import DivisionPostList from "./Notice/DivisionPostList";
import FavoritePostList from "./Notice/FavoritePostList";
import FreedomPostList from "./Notice/FreedomPostList";
import ImagePostList from "./Notice/ImagePostList";

function Notice() {
  return (
    <div>
      <FavoritePostList />
      <ImagePostList />
      <FreedomPostList />
      <DivisionPostList />
    </div>
  );
}

export default Notice;
