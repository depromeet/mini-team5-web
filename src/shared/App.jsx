import React, {Component} from "react";
import {Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage}/>
      </div>
    );
  }
}

export default App;