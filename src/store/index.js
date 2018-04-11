import {createStore} from "redux";
import reducer from "../reducer";

const configure = () => {
  const store = createStore(reducer);
  return store;
};

export default configure;
