import React, { Component, Fragment } from "react";
import HttpConnector from "../network/HttpConnector";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsTitle: "",
      newsContent: "",
      newsUrl: "",
      imageUrl: ""
    };
  }

  async componentDidMount() {
    const { title, content, newsUrl } = await this.getNews(this.props.topic);
    const { imageUrl } = await this.getImageURL(this.props.topic);
    this.setState({
      newsTitle: title,
      newsContent: content,
      newsUrl,
      imageUrl
    });
  }

  async getNews(topic) {
    const news = await HttpConnector.getNews(this.props.topic);
    return news;
  }

  async getImageURL(topic) {
    const imageURL = await HttpConnector.getImageURL(this.props.topic);
    return imageURL;
  }

  render() {
    return (
      <Fragment>
        <img src={this.state.imageUrl} alt="이미지를 가져오지 못했습니다." />
        <h1>{this.state.newsTitle}</h1>
        <p>{this.state.newsContent}</p>
        <a href={this.state.newsUrl}>더 보기</a>
      </Fragment >
    );
  }
}

export default News;
