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

  async componentWillReceiveProps(nextProps) {
    await this.loadNews({topic: nextProps.topic});
  }

  async getNews({topic}) {
    const news = await HttpConnector.getNews(topic);
    return news;
  }

  async getImageURL({topic}) {
    const imageURL = await HttpConnector.getImageURL(topic);
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

  async componentDidMount() {
    await this.loadNews({topic: this.props.topic});
  }

  async loadNews({topic}) {
    const { title, content, newsUrl } = await this.getNews({topic: topic});
    const { imageUrl } = await this.getImageURL({topic: topic});
    this.setState({
      newsTitle: title,
      newsContent: content,
      newsUrl,
      imageUrl
    });
  }
}

export default News;
