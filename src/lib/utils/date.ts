export function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

export function dateToString(date: Date) {
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

//데이터는 질병관리청에서 전일 0시 기준으로 집계된 자료를 매일 9시 35분에 갱신하고 있습니다.
export function getDataGoDate() {
  const date = new Date();
  // 10시 이전 -> 이전 날짜
  // 10시 이후 -> 지금 날짜
  if (date.getHours() > 10) return dateToString(date);
  return dateToString(new Date(date.setDate(date.getDate() - 1)));
}
