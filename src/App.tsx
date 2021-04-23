import React from "react";
import { Global, css } from "@emotion/react";
import { Route, Switch } from "react-router-dom";
import SvgIcon from "./components/SvgIcon";
import palette from "./lib/styles/palette";
import global from "./lib/styles/global";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <SvgIcon name="spinner" css={spinner} />
        </Route>
        <Route path="/loading" exact>
          <LoadingSpinner size="1.5rem" />
        </Route>
      </Switch>
      <Global styles={global} />
    </>
  );
}

const spinner = css`
  width: 5rem;
  height: 5rem;
  color: ${palette.red[100]};
`;

export default App;
