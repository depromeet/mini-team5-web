import React from "react";
import BoardItem from "../Components/BoardItem";
import HttpConnector from "../network/HttpConnector";

class BoardPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      boardsItems: []
    };
  }

  render() {
    const history = this.props.history;

    return (
      <React.Fragment>
        {this.state.boardsItems.map((item) => (
          <BoardItem keyword={item.keyword} key={item.keyword} history={history}/>
        ))}
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const keywords = await HttpConnector.getKeywords();
    console.log(keywords);
    this.setState({
      boardsItems: keywords
    })
  }
}

export default BoardPage;