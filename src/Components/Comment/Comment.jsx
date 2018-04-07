import React from "react";

export default ({ content, nickname }) => {
  return (
    <div className="comment-detail">
      <h3>{nickname}</h3>
      <p>{content}</p>
    </div>
  );
};
