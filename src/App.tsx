import React from "react";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import global from "./lib/styles/global";
import Main from "./pages/Main";
import GNB from "./components/GNB";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div id="portal" />
      <Global styles={global} />
      <Switch>
        <Route path={["/", "/test", "/test/:id", "/test2"]} exact>
          <Layout>
            <Layout.Aside>
              <GNB />
            </Layout.Aside>
            <Layout.Main>
              <Switch>
                <Route path="/" exact>
                  <Main />
                </Route>
                <Route path="/test/:id" exact></Route>
              </Switch>
            </Layout.Main>
          </Layout>
        </Route>
        <Route>404</Route>
      </Switch>
    </>
  );
}

export default App;
