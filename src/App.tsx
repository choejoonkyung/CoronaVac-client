import { css } from "@emotion/react";
import SvgIcon from "./components/SvgIcon";
import { Route, Switch } from "react-router-dom";

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
  width: 1rem;
  height: 1rem;
`;

export default App;
