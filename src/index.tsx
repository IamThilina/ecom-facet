import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

import rootReducer from "./reducers";
import providers from "./providers";
import App from "./components/app";

import "./index.scss";

const { CategoriesProvider } = providers;

const store = createStore(rootReducer);

const rootNode = (
  <ReduxProvider store={store}>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </ReduxProvider>
);

ReactDOM.render(rootNode, document.querySelector("#root"));
