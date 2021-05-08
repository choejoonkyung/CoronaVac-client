import { Period } from "../types";

export function getToday() {
  const d = new Date();
  const year = d.getFullYear();
  const month = ("0" + (1 + d.getMonth())).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

export function dateToString(d: Date) {
  const year = d.getFullYear();
  const month = ("0" + (1 + d.getMonth())).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

//데이터는 질병관리청에서 전일 0시 기준으로 집계된 자료를 매일 9시 35분에 갱신하고 있습니다.
export function getDataGoDate() {
  const d = new Date();
  // 10시 이전 -> 이전 날짜
  // 10시 이후 -> 지금 날짜
  if (d.getHours() > 10) return dateToString(d);
  return dateToString(new Date(d.setDate(d.getDate() - 1)));
}

export function calcPeriodDate(period: Period) {
  const d = new Date();
  switch (period) {
    case "1달":
      return dateToString(new Date(d.setMonth(d.getMonth() - 1)));
    case "1주":
      return dateToString(new Date(d.setDate(d.getDate() - 7)));
    case "3달":
      return dateToString(new Date(d.setMonth(d.getMonth() - 3)));
    case "전체":
      // 백신 접종 날짜 시작이 2021-03-11
      return "2021-03-11";
    default:
      return dateToString(d);
  }
}
