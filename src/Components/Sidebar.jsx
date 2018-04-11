import React, { Component } from "react";
import Icon from "./Icon";
import Rank from "./Rank";
import Profile from "./Profile";


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Icon />
        <Rank keywords={this.props.keywords} />
        <Profile nickname={this.props.nickname} />
      </div>
    );
  }
}

export default Sidebar;
