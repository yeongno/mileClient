import React from "react";
import ReactDOM from "react-dom/client";
import Reducer from "./redux/_reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>
);
