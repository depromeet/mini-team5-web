import React, { Component } from "react";

class Pager extends Component {
  render() {
    const before = <h4>BEFORE</h4>;
    const next = <h4>NEXT</h4>;

    return (
      <div className="sidebar-rank-pager">
        {this.props.pageNum !== 1 && before}
        {this.props.pageNum < this.props.pageTotal && next}
      </div>
    );
  }
}

export default Pager;
