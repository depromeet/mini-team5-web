import React from "react";
import {Link} from "react-router-dom";

class BoardItem extends React.Component {
  render() {
    return (
      <div>
        <Link to="/boards">{this.props.title}</Link>
      </div>
    );
  }
}

export default BoardItem;