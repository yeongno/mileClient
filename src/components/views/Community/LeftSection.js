import React, { useEffect, useState } from "react";
import Banner from "./LeftSection/Banner";
import ListSection from "./LeftSection/ListSection";

function LeftSection(props) {
  const [OnDetailPost, setOnDetailPost] = useState("");
  useEffect(() => {
    setOnDetailPost(props.OnDetailPost);
  }, [props.OnDetailPost]);
  return (
    <div>
      {OnDetailPost === false && <Banner />}
      <ListSection onClass={props.onClass} />
    </div>
  );
}

export default LeftSection;
