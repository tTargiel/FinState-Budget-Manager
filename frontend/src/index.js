import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import menuBar from "./menuBar";
import { store } from "./app/store";

function isMacintosh() {
  return navigator.platform.indexOf('Mac') > -1
}

if (isMacintosh()) {
  menuBar();
}

isMacintosh();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
