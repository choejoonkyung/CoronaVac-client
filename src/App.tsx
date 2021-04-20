import { css } from "@emotion/react";
import SvgIcon from "./components/SvgIcon";

function App() {
  return (
    <div css={style}>
      <SvgIcon name="spinner" css={spinner} />
    </div>
  );
}

const style = css``;

const spinner = css`
  width: 1rem;
  height: 1rem;
`;

export default App;
