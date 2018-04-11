import React, { Component, Fragment } from "react";
import Sidebar from "../Components/Sidebar";
import News from "../Components/News";
import CommentList from "../Components/Comment/CommentList";
import HttpConnector from "../network/HttpConnector";


export default class CommentPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      keywords: [],
      selectedKeyword: null
    };

    this.loadKeywords();
  }

  render() {
    return (
      this.state.selectedKeyword ?
        <Fragment>
          <Sidebar nickname={this.props.location.state.nickname} keywords={this.state.keywords} />
          <div className="comment-news">
            <News topic={this.state.selectedKeyword} />
          </div>
          <CommentList keyword={this.state.selectedKeyword} />
        </Fragment> :
        <div/>
    );
  }

  async loadKeywords() {
    const keywords = await HttpConnector.getKeywords();
    const selectedKeyword = keywords ? keywords[0] : "";

    this.setState({
      keywords: keywords,
      selectedKeyword: selectedKeyword
    });
  }
}
