import React, { Component } from "react";
import axios from "axios";
import "./CommentPage.css";

import Comment from "../Components/Comment/Comment";

class CommentPage extends Component {
  // TODO set up ajax call
  constructor(props) {
    super(props);
    this.ajax = axios.create({
      baseURL: "/"
    });
  }

  // TODO get comments by ajax call
  componentWillMount() {

  }

  render() {
    return (
      <div id="commentpage">
        <h1>{this.props.topic}</h1>
        <div id="comment-list">
          {/* Get comment by ajax */}
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }

  // Maybe not needed?
  componentDidMount() {

  }

}

export default CommentPage;
