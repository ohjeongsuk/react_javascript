import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useReview from "../hooks/useReview"
import { getStrDate } from "../util/get-stringed-date"
import { ReviewStateContext } from "../App"
import { useContext, useEffect, useState } from "react";

// pages/Review.jsx: 리뷰 상세 조회 페이지
// - URL 파라미터에서 리뷰 ID를 받아와 해당 리뷰를 상세 표시합니다
// - 수정 페이지로 이동하는 버튼을 제공합니다

const Review = () => {
  // URL에서 리뷰 ID 추출 (예: /review/1 → params.id = "1")
  const params = useParams();
  const nav = useNavigate(); // 페이지 이동 함수

  // 전역 상태에서 리뷰 목록을 가져옵니다
  const data = useContext(ReviewStateContext);
  const [curReviewItem, setCurReviewItem] = useState(); // 현재 표시할 리뷰 데이터

  // 리뷰 ID로 해당 리뷰를 찾아서 상태에 저장합니다
  useEffect(() => {
    const currentReviewItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    // 리뷰가 존재하지 않으면 경고 후 홈으로 이동
    if (!currentReviewItem) {
      window.alert("리뷰가 존재하지 않습니다");
      nav("/", { replace: true });
      return;
    }
    setCurReviewItem(currentReviewItem);
  }, [nav, data, params.id]);

  // 리뷰 로딩 중 표시
  if (!curReviewItem) {
    return <div>로딩중...</div>;
  }

  // 리뷰 데이터 분해
  const { createdDate, emotionId, content } = curReviewItem;
  // 날짜를 "YYYY-MM-DD" 형식으로 포맷
  const titie = getStrDate(new Date(createdDate))

  return (
    <div>
      {/* 헤더: 작성 날짜 표시 + 뒤로 가기/수정하기 버튼 */}
      <Header
        title={`${titie}`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)}
          text={"수정하기"} />}
      />
      {/* 리뷰 내용 표시 (평점 + 리뷰 텍스트) */}
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Review;
