import Header from "../components/Header";
import Button from "../components/Button";
import ReviewList from "../components/ReviewList";
import { useState, useContext } from "react";
import { ReviewStateContext } from "../App";

// pages/Home.jsx: 영화 리뷰 앱의 홈 화면
// - 월별로 리뷰를 필터링해서 표시합니다
// - 헤더의 "<" ">" 버튼으로 월을 이동할 수 있습니다

// 주어진 월에 해당하는 리뷰들만 필터링하는 함수
// 예: 2026년 8월 1일 00:00:00 ~ 8월 31일 23:59:59 범위의 리뷰들을 반환
const getMonthlyData = (pivotDate, data) => {
  // 월의 첫날 00:00:00 시간을 기준점으로 설정
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();
  // 월의 마지막날 23:59:59 시간을 기준점으로 설정
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  // 이 범위에 해당하는 리뷰들을 반환
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

const Home = () => {
  // 전역 상태에서 모든 리뷰 데이터를 가져옵니다
  const data = useContext(ReviewStateContext);

  // 현재 표시 중인 달을 추적하는 state (기본값: 오늘 날짜)
  const [pivotDate, setPivotDate] = useState(new Date());

  // 현재 월에 해당하는 리뷰들만 필터링
  const monthlyData = getMonthlyData(pivotDate, data);

  // 월을 앞으로 이동 (8월 → 9월)
  const onlncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  // 월을 뒤로 이동 (8월 → 7월)
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      {/* 헤더: 현재 월 표시 + 월 이동 버튼 */}
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onlncreaseMonth} />}
      />
      {/* 해당 월의 리뷰 목록 표시 */}
      <ReviewList data={monthlyData} />
    </div>
  );
};

export default Home;
