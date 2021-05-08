import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Period, Sido } from "../lib/types";

export type StatisticsState = {
  sido: Sido;
  period: Period;
};

const statisticsState = atom<StatisticsState>({
  key: "statisticsState",
  default: {
    sido: "전국",
    period: "1주",
  },
});

export function useStatisticsState() {
  return useRecoilState(statisticsState);
}

export function useStatisticsValue() {
  return useRecoilValue(statisticsState);
}
