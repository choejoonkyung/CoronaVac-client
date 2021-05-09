import { css } from "@emotion/react";
import React from "react";
import SectionBase from "../../components/SectionBase";
import SvgIcon from "../../components/SvgIcon";
import useInfo from "../../hooks/useInfo";
import palette from "../../lib/styles/palette";

export type InfoProps = {};

function Info({}: InfoProps) {
  const { toGithub } = useInfo();
  return (
    <div css={wrapper}>
      <SectionBase css={headerStyle}>정보</SectionBase>
      <SectionBase css={infoStyle}>
        <p>
          Coronavac은 공공데이터 API를 이용하여 코로나 백신 예방 접종 통계
          데이터를 쉽게 볼 수 있고 백신 예방 접종 센터를 조회 할 수 있는 서비스
          입니다. 국가 공식 사이트가 아니며 개인이 만든 비공식 사이트입니다.
        </p>
        <ul>
          <li>
            제공되는 데이터는 공공데이터 API의{" "}
            <a
              href="https://data.go.kr/data/15077756/openapi.do"
              target="_blank"
            >
              공공데이터 활용지원센터 코로나19 예방접종 통계 데이터 조회 서비스
            </a>
            를 이용되었습니다.
          </li>
          <li>
            제공되는 데이터는 질병관리청에서 전일 0시 기준으로 집계된 자료를
            매일 9시 35분에 갱신하고 있습니다. 오늘의 최신 데이터를 확인하고
            싶으시다면 오전 10시 이후에 확인 할 수 있습니다.
          </li>
          <li>
            제공되는 데이터는 개인이 이용하거나 공유가능한 데이터입니다. 하지만
            본 사이트에서 제공하는 정보를 이용 또는 공유하여 문제가 발생할 시
            해당 책임은 전적으로 사용자에게 있음을 알려드립니다.
          </li>
          <li>문의 사항은 메일을 이용해주세요.</li>
          <li>현재 본 사이트의 소스코드는 깃 허브에서 공유 중 입니다.</li>
        </ul>
      </SectionBase>
      <SectionBase css={footerStyle}>
        <a href="mailto: choejunkyung@gmail.com">
          <SvgIcon name="mail" />
        </a>
        <SvgIcon name="github" onClick={toGithub} />
      </SectionBase>
    </div>
  );
}

const wrapper = css`
  section + section {
    margin-top: 1rem;
  }
`;

const headerStyle = css`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${palette.blueGrey[800]};
  padding: 1rem;
`;

const infoStyle = css`
  padding: 1rem;

  p {
    color: ${palette.blueGrey[900]};
    font-size: 1.1rem;
  }

  ul {
    margin-top: 1.5rem;
    li + li {
      margin-top: 1rem;
    }
    li {
      font-size: 1.05rem;
      color: ${palette.blueGrey[800]};
    }
  }
`;

const footerStyle = css`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  svg {
    color: ${palette.blueGrey[700]};
    cursor: pointer;
  }
`;

export default Info;
