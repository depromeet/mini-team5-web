import React, { Component } from "react";
import axios from "axios";
import "./CommentPage.css";

import Comment from "../Components/Comment/Comment";

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.ajax = axios.create({
      baseURL: "http://172.16.6.194:8080/"
    });
    this.state = {
      comments: []
    };
  }

  async componentWillMount() {
    const topic = this.props.topic;
    try {
      const response = await this.ajax.get(`/board/${topic}/list`);
      console.log(response);
      this.setState({
        comments: response
      });
    } catch (error) {
      console.error(error);
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
