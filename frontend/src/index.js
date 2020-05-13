import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import RegisterRoute from "./routes/RegisterRoute";
import PostArdData from "./routes/PostArdData";
import UserList from "./routes/UserList";

const Root = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={App} />
        <Route path="/register" component={RegisterRoute} />
        <Route path="/data" component={PostArdData} />
        <Route path="/users" component={UserList} />
        {/* <Route path='/' component={Login} />
        <Route path='/' component={Register} /> */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
