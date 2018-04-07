import React from "react";

class BoardItem extends React.Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div onClick={this.onClick}>
        {this.props.keyword}
      </div>
    );
  }

  onClick(){
    this.props.history.push("comments/" + this.props.keyword);
  }
}

export default BoardItem;