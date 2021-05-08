import client from "../client";

// EQ("="), GTE(">="), GT(">"), LT("<"), LTE("<=");
export type StatisticsReq = {
  page: number;
  perPage: number;
  "cond[baseDate::EQ]"?: string;
  "cond[baseDate::LT]"?: string;
  "cond[baseDate::LTE]"?: string;
  "cond[baseDate::GT]"?: string;
  "cond[baseDate::GTE]"?: string;
  "cond[sido::EQ]"?: string;
};

export type Statistics = {
  sido: string;
  firstCnt: number;
  secondCnt: number;
  totalFirstCnt: number;
  totalSecondCnt: number;
  accumulatedFirstCnt: number;
  accumulatedSecondCnt: number;
  baseDate: string;
};

export type StatisticsRes = {
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  data: Statistics[];
};

export async function getStatistics(data: StatisticsReq) {
  const response = await client.get<StatisticsRes>(
    `/15077756/v1/vaccine-stat`,
    {
      params: {
        ...data,
        serviceKey: process.env.REACT_APP_DATA_GO_KEY,
      },
    }
  );
  return response.data;
}
