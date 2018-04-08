import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import 'semantic-ui-css/semantic.min.css';
import Root from "./mobile/Root";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();