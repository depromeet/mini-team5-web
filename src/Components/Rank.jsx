import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeSelectedKeyword } from "../actions";
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

    //this.onMovePage = this.onMovePage.bind(this);
  }

  async componentDidMount() {
    const keywords = this.props.keywords;
    const begin = (this.state.page - 1) * 7;
    this.setState({
      totalPage: keywords.length,
      keywords: keywords.slice(begin, begin + 7)
    });
  }

  render() {
    return (
      <div>
        <ol className="sidebar-rank">{
          this.state.keywords.map((item, i) =>
            <li key={i} onClick={this.onMovePage.bind(this, {keyword: item.keyword})}>
              <ListElement number={i + 1}
                item={item.keyword}/>
            </li>
          )}
        </ol>
        <Pager pageNum={this.state.page} pageTotal={this.state.totalPage} />
      </div>
    );
  }

  onMovePage({keyword}) {
    this.props.onChangeSelectedKeyword({keyword: keyword});
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeSelectedKeyword: ({ keyword }) => dispatch(changeSelectedKeyword({ keyword })),
});

export default connect(null, mapDispatchToProps)(Rank);