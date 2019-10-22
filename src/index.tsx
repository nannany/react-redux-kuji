import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/index";
import Result from "./components/result";
import { Provider } from "react-redux";
import configureStore from "./reducers";
import * as queryString from "querystring";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          path="/result"
          render={props => (
            <Result
              qs={queryString.parse(props.location.search.substr(1))} // ?が入ってしまうのでsubstrで対処
              resultState={null}
            />
          )}
        />
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
