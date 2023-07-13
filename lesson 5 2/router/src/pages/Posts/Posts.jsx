import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Posts = () => {
  const naviate = useNavigate();
  const location = useLocation();
  const onBlackClick = () => {
    naviate(location.state?.from || "/");
  };
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={onBlacck</button>
    </div>
  );
};

export default Posts;