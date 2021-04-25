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
      <Switch>
        <Route path={["/", "/workspace"]} exact>
          <GNB />
          <Route path="/" exact>
            <Main />
          </Route>
        </Route>
      </Switch>
      <Global styles={global} />
    </>
  );
}

export default App;
