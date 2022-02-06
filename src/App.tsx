import React from "react";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import global from "./lib/styles/global";
import GNB from "./components/GNB";
import Layout from "./components/Layout";
import Statistics from "./pages/Statistics";
import Info from "./pages/Info";
import NotFoundError from "./pages/NotFoundError";
// import SearchCenter from "./pages/SearchCenter";

function App() {
  return (
    <>
      <Global styles={global} />
      <Switch>
        <Route path={["/", "/info"]} exact>
          <Layout.Aside>
            <GNB />
          </Layout.Aside>
          <Layout.Main>
            <Switch>
              <Route path="/" exact>
                <Statistics />
              </Route>
              {/* <Route path="/map" exact>
                  <SearchCenter />
                </Route> */}
              <Route path="/info" exact>
                <Info />
              </Route>
            </Switch>
          </Layout.Main>
        </Route>
        <Route>
          <NotFoundError />
        </Route>
      </Switch>
    </>
  );
}

export default App;
