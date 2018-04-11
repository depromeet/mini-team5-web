import React, { Component } from "react";
import HttpConnector from "../../network/HttpConnector";
import Comment from "./Comment";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      comments: [],
      comment: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    const topic = nextProps.keyword;
    const response = await HttpConnector.getComments(topic);
    if (response !== null) {
      this.setState({
        comments: response
      });
    }
  }

  render() {
    let commentComponent;
    if (this.state.comments.length === 0) {
      commentComponent = <h3>{this.props.keyword} 에 대한 댓글이 아직 없습니다</h3>;
    } else {
      commentComponent = this.state.comments.map((element) =>
        <Comment content={element.content} nickname={element.nickname} key={element.content} />);
    }

    return (
      <div className="comment-list">
        <div>
          {commentComponent}
        </div>
        <div className="comment-input-box">
          <input className="comment-input" placeholder="Type message.." onChange={this.onTextChange}></input>
          <button className="comment-send-button" onClick={this.onSendMessage}>SEND</button>
        </div>
      </div>
    );
  }

  onTextChange(e) {
    const text = e.target.value;
    this.setState({comment: text});
  }

  onSendMessage() {
    this.setState({
      comments: [this.state.comments, {content: this.state.text, nickname: "hello"}],
    });

    this.setState({
      comment: ""
    });
  }
}

export default CommentList;
