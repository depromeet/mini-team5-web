import React from "react";
import BoardItem from "../Components/BoardItem";

class BoardPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      boardsItems: ["hello", "hello2"]
    };
  }

  render() {
    return (
      <div>
        {this.state.boardsItems.map((item) => (
          <BoardItem title={item} key={item}/>
        ))}
      </div>
    );
  }
}

export default BoardPage;