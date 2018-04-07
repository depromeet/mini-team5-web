import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import CommentPage from "../pages/CommentPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/boards" component={BoardPage} />
        <Route exact path="/comments/:keyword" component={CommentPage} />
      </div>
    );
  }
}

export default App;