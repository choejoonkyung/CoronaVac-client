import { css } from "@emotion/react";
import SvgIcon from "./components/SvgIcon";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <SvgIcon name="spinner" css={spinner} />
      </RecoilRoot>
    </>
  );
}

const spinner = css`
  width: 1rem;
  height: 1rem;
`;

export default App;
