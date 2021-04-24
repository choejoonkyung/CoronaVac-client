import React from "react";
import { Global } from "@emotion/react";
import global from "./lib/styles/global";
import { Route, Switch } from "react-router-dom";
import SvgIcon from "./components/SvgIcon";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <SvgIcon name="spinner" />
        </Route>
        <Route path="/loading" exact>
          <button disabled={true}>
            <LoadingSpinner size="1.5rem" />
          </button>
        </Route>
      </Switch>
      <Global styles={global} />
      <div id="portal"></div>
    </>
  );
}

export default App;
