import { css } from "@emotion/react";

const global = css`
  html,
  body,
  #root {
    height: 100%;
  }
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
`;

export default global;
