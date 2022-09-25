import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PostSection() {
  const Post = useSelector((state) => state.post.postOne);
  const [Title, setTitle] = useState("");
  // console.log(Post[0]);
  useEffect(() => {
    fetchPostList();
  }, [Post]);
  const fetchPostList = () => {
    if (Post) {
      setTitle(Post[0].title);
    }
  };
  return <div>{Title}</div>;
}

export default PostSection;
