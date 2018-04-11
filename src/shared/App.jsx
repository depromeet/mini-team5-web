import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import CommentPage from "../pages/CommentPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/boards" component={BoardPage} />
        <Route exact path="/comments" component={CommentPage} />
      </Fragment>
    );
  }
}

export default App;