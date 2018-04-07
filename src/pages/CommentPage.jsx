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

  async componentWillMount() {

    const comments = await HttpConnector.getComments({keyword: this.props.match.params.keyword});

    if(comments){
      this.setState({
        keyword: this.props.match.params.keyword,
        comments: comments
      })
    }
    else{
      alert("죄송합니다. 현재 대화창을 불러 올 수 없습니다.");
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
