import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
//import store from "../store";
import App from "../shared/App";

import reducer from "../reducer";
import {createStore} from "redux";

const store = createStore(reducer);

const Root = () => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

export default Root;