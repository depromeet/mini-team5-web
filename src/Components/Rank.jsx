import React, { Component, Fragment } from "react";
import HttpConnector from "../network/HttpConnector";
import Pager from "./Pager";

const ListElement = ({ number, item }) => (
  <Fragment>
    <p className="sidebar-rank-element-number">{number}</p>
    <p className="sidebar-rank-element-item">{item}</p>
  </Fragment>
);


class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPage: 0,
      keywords: []
    };
  }

  async componentDidMount() {
    const keywords = await HttpConnector.getKeywords();
    const begin = (this.state.page - 1) * 7;
    this.setState({
      totalPage: keywords.length,
      keywords: keywords.slice(begin, begin + 7)
    });
  }

  render() {
    return (
      <div>
        <ol className="sidebar-rank">
          {this.state.keywords.map((item, i) =>
            <li key={i}><ListElement number={i + 1} item={item.keyword} /></li>)}
        </ol>
        <Pager pageNum={this.state.page} pageTotal={this.state.totalPage} />
      </div>
    );
  }
}

export default Rank;