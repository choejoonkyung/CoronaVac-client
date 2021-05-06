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

//해당 데이터는 질병관리청에서 전일 0시 기준으로 집계된 자료를 매일 9시 35분에 갱신하고 있습니다.
// TODO: 위 기준으로 날짜를 뽑는 함수 만들어야함.
export function getDataGoDate() {
  const date = new Date();
  console.log(date);
}
