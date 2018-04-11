import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeSelectedKeyword } from "../actions";
import Sidebar from "../Components/Sidebar";
import News from "../Components/News";
import CommentList from "../Components/Comment/CommentList";
import HttpConnector from "../network/HttpConnector";

class CommentPage extends Component {
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
      this.props.selectedKeyword ?
        <Fragment>
          <Sidebar nickname={this.props.location.state.nickname} keywords={this.state.keywords} />
          <div className="comment-news">
            <News topic={this.props.selectedKeyword} />
          </div>
          <CommentList keyword={this.props.selectedKeyword} />
        </Fragment> :
        <div/>
    );
  }

  async loadKeywords() {
    const keywords = await HttpConnector.getKeywords();
    const selectedKeyword = keywords ? keywords[0].keyword : "";

    this.setState({
      keywords: keywords,
    });

    this.props.onChangeSelectedKeyword({keyword: selectedKeyword});
  }
}

const mapStateToProps = state => ({
  selectedKeyword: state.KeywordReducer.selectedKeyword
});

const mapDispatchToProps = dispatch => ({
  onChangeSelectedKeyword: ({ keyword }) => dispatch(changeSelectedKeyword({ keyword }))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);