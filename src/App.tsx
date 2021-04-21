import { css } from "@emotion/react";
import SvgIcon from "./components/SvgIcon";
import { Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <SvgIcon name="spinner" css={spinner} />
        </Route>
      </Switch>
    </>
  );
}

const spinner = css`
  width: 5rem;
  height: 5rem;
`;

export default App;
