import React, { Component } from "react";

class Profile extends Component {
  // 시간관련해서 업데이트?
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <div className="sidebar-profile">
        {/* Profile picture(Random asset) */}
        <h2>Hey</h2>
        <h2>{this.props.nickname}</h2>
        {/* Current time */}
      </div>
    );
  }
}

export default Profile;
