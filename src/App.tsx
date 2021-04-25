import React from "react";
import { Global } from "@emotion/react";
import global from "./lib/styles/global";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import GNB from "./components/GNB";

function App() {
  return (
    <>
      <div id="portal"></div>
      <GNB />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
      <Global styles={global} />
    </>
  );
}

export default App;
