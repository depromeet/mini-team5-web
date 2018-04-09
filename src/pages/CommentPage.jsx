import React, { Fragment } from "react";
import Sidebar from "../Components/Sidebar";
import News from "../Components/News";
import CommentList from "../Components/Comment/CommentList";


export default (props) => {
  const keyword = props.location.state.keyword;
  return (
    <Fragment>
      <Sidebar nickname="Gyu" />
      <div className="comment-news">
        <News topic={keyword} />
      </div>
      <CommentList keyword={keyword} />
    </Fragment>
  );
};
