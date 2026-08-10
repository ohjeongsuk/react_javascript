import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { ReviewDispatchContext, ReviewStateContext } from "../App";

// pages/Edit.jsx: 리뷰 수정/삭제 페이지
// - URL 파라미터에서 리뷰 ID를 받아와 해당 리뷰를 찾습니다
// - Editor에서 수정 데이터를 받거나 삭제 버튼을 클릭할 수 있습니다

const Edit = () => {
  // URL에서 리뷰 ID 추출 (예: /edit/1 → params.id = "1")
  const params = useParams();
  const nav = useNavigate(); // 페이지 이동 함수

  // 전역 상태에서 수정/삭제 함수와 리뷰 목록을 가져옵니다
  const { onDelete, onUpdate } = useContext(ReviewDispatchContext);
  const data = useContext(ReviewStateContext);
  const [curReviewItem, setCurReviewItem] = useState();

  // URL ID와 일치하는 리뷰를 찾습니다
  const currentReviewItem = data.find(
    (item) => String(item.id) === String(params.id),
  );

  // 리뷰가 존재하지 않으면 경고 후 홈으로 이동
  useEffect(() => {
    if (!currentReviewItem) {
      window.alert("존재하지 않는 리뷰입니다.");
      nav("/", { replace: true });
    }
  }, [currentReviewItem, nav]);

  // 삭제 버튼 클릭 핸들러
  const onClickDelete = () => {
    if (window.confirm("정말 삭제할까요? 다시 복구되지 않습니다!")) {
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };

  // Editor에서 수정 데이터를 받으면 실행되는 콜백 함수
  const onSubmit = (input) => {
    if (window.confirm("리뷰를 수정할까요?")) {
      onUpdate(
        Number(params.id),
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      {/* 헤더: 페이지 제목 + 뒤로 가기/삭제 버튼 */}
      <Header
        title={"리뷰 수정"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제"} type={"NEGATIVE"} />
        }
      />
      {/* 입력 폼 (initData 전달 = 수정 모드) */}
      <Editor initData={currentReviewItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
