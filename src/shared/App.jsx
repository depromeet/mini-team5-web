import React, {Component} from "react";
import {Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/boards" component={BoardPage}/>
      </div>
    );
  }
}

export default App;