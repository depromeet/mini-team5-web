import React, { Component } from "react";
import axios from "axios";
import "./CommentPage.css";

import Comment from "../Components/Comment/Comment";
import HttpConnector from "../network/HttpConnector";

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    const topic = this.props.topic;
    const response = HttpConnector.getComments(topic);
    if (response !== null) {
      this.setState({
        comments: response
      });
    }
  }

  render() {
    return (
      <div id="commentpage">
        <h1>{this.props.topic}</h1>
        <div id="comment-list">
          {this.state.comments.map((element) =>
            <Comment content={element.content} nickname={element.nickname} />)}
        </div>
      </div>
    );
  }

  // Maybe not needed?
  componentDidMount() {
    console.log(this.props);
  }

}

export default CommentPage;
