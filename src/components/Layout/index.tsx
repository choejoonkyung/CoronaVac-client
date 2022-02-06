import React from "react";
import { css } from "@emotion/react";
import { LEFT_SIDE_BAR_WIDTH } from "../../lib/constants";
import media from "../../lib/styles/media";

export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div css={layoutStyle}>{children}</div>;
}

export type SideProps = {
  children: React.ReactNode;
};

function Aside({ children }: SideProps) {
  return (
    <aside css={leftBarStyle}>
      <h2>코로나백 로고 및 메뉴</h2>
      {children}
    </aside>
  );
}

export type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>;
}

Layout.Aside = Aside;
Layout.Main = Main;

const layoutStyle = css`
  max-width: 60.25rem;
  margin: 0 auto;
`;

const leftBarStyle = css`
  width: ${LEFT_SIDE_BAR_WIDTH};
  position: fixed;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${media.small} {
    position: relative;
    padding-bottom: 1rem;
    padding-top: 1rem;
    width: 100%;
  }
`;

const mainStyle = css`
  margin-left: ${LEFT_SIDE_BAR_WIDTH};
  max-width: calc(61.25rem - ${LEFT_SIDE_BAR_WIDTH});
  width: 100%;
  padding-left: 5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${media.small} {
    padding-left: 0;
    padding-top: 0;
    margin-left: 0;
  }
`;

export default Layout;
