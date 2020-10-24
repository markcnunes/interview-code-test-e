import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components";

import configureStore from "./redux/store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import "./style/style.css";

const store = configureStore();

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
registerServiceWorker();
