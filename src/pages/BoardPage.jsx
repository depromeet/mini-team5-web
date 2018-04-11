import React, { Component, Fragment } from "react";
import BoardItem from "../Components/BoardItem";
import HttpConnector from "../network/HttpConnector";

class BoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardsItems: []
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.boardsItems.map((item) => (
          <BoardItem keyword={item.keyword} key={item.keyword} />
        ))}
      </Fragment>
    );
  }

  async componentDidMount() {
    const keywords = await HttpConnector.getKeywords();
    this.setState({
      boardsItems: keywords
    });
  }
}

export default BoardPage;