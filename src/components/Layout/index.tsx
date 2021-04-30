import { css } from "@emotion/react";
import { LEFT_SIDE_BAR_WIDTH } from "../../lib/constants";

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
  return <aside css={leftBarStyle}>{children}</aside>;
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
  max-width: 46.875rem;
  margin: 0 auto;
`;

const leftBarStyle = css`
  width: ${LEFT_SIDE_BAR_WIDTH};
  position: fixed;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const mainStyle = css`
  margin-left: ${LEFT_SIDE_BAR_WIDTH};
  max-width: 37.5rem;
  width: 100%;
  padding-left: 5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default Layout;
