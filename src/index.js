import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import {store} from "./redux/store";
import UserInfo from "./userInfo";
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div style={{ padding: 15 }}>
        <Route path="/" component={UserInfo} />
      </div>
    </BrowserRouter>
  </Provider>,
  rootEl
);
