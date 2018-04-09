import React, { Component } from "react";
import HttpConnector from "../../network/HttpConnector";
import Comment from "./Comment";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      comments: []
    };
  }

  render() {
    let commentComponent;
    if (this.state.comments.length === 0) {
      commentComponent = <h1>{this.props.keyword} 에 대한 댓글이 아직 없습니다</h1>;
    } else {
      commentComponent = this.state.comments.map((element) =>
        <Comment content={element.content} nickname={element.nickname} key={element.content} />);
    }

    return (
      <div className="comment-list">
        {commentComponent}
      </div>
    );
  }

  async componentDidMount() {
    const topic = this.props.keyword;
    const response = await HttpConnector.getComments(topic);
    if (response !== null) {
      this.setState({
        comments: response
      });
    }
  }
}

export default CommentList;
