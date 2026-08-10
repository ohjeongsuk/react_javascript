import { useContext, useState, useEffect } from "react";
import { ReviewStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useReview = (id) => {
  const data = useContext(ReviewStateContext);
  const [curReviewItem, setCurReviewItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentReviewItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentReviewItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [curReviewItem, nav, data, id]);
};

export default useReview;