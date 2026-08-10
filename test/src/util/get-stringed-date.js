// util/get-stringed-date.js: Date 객체를 "YYYY-MM-DD" 형식 문자열로 변환하는 순수 함수
// 예시: getStrDate(new Date("2026-08-19")) → "2026-08-19"

export const getStrDate = (targetDate) => {
  // 연, 월, 일을 추출합니다
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1; // getMonth()는 0~11을 반환하므로 +1 필요
  let date = targetDate.getDate();

  // 월, 일이 한 자릿수면 앞에 0을 붙여서 "09" 형식으로 만듭니다 (스타일링)
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}; 