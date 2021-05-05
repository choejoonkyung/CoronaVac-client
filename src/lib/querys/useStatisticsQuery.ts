import { useQuery } from "react-query";
import { getStatistics, StatisticsReq } from "../api/dataGo/getStatistics";
import { QueryOptionsOf } from "../utils/types";

export default function useStatisticsQuery(
  data: StatisticsReq,
  options: QueryOptionsOf<typeof getStatistics> = {}
) {
  return useQuery(createKey(data), () => getStatistics(data), options);
}

const createKey = (data: StatisticsReq) => ["staticsPage", data.page];

useStatisticsQuery.createKey = createKey;
