import { useContext, useState, useEffect } from "react";
import { ReviewStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// hooks/useReview.jsx: 커스텀 훅 - 주어진 id의 리뷰가 존재하는지 확인합니다
// 만약 존재하지 않으면 사용자에게 알림을 보이고 홈 화면으로 리다이렉트합니다
//
// [주의] 이 훅은 현재 어떤 페이지에서도 사용되지 않습니다
// Edit.jsx와 Review.jsx가 동일한 로직을 각자 구현하고 있습니다 (리팩터링 대상)

const useReview = (id) => {
  // 전역 상태에서 리뷰 목록을 가져옵니다
  const data = useContext(ReviewStateContext);
  const [curReviewItem, setCurReviewItem] = useState();
  const nav = useNavigate(); // 페이지 이동 함수

  useEffect(() => {
    // 현재 id와 일치하는 리뷰 항목을 찾습니다
    const currentReviewItem = data.find(
      (item) => String(item.id) === String(id)
    );

    // 찾지 못하면 경고 후 홈으로 이동
    if (!currentReviewItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true }); // replace: true = 브라우저 뒤로가기에서 이 페이지가 안 나타남
    }
  }, [curReviewItem, nav, data, id]);
};

export default useReview;