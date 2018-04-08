import React, { Component } from "react";
import Comment from "../Components/Comment/Comment";
import HttpConnector from "../network/HttpConnector";

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
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
        <h1>{this.state.keyword}</h1>
        <div id="comment-list">
          {this.state.comments.map((element) =>
            <Comment content={element.content} nickname={element.nickname} />)}
        </div>
      </div>
    );
  }
}

export default CommentPage;
