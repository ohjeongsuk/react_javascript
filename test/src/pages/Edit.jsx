import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { ReviewDispatchContext, ReviewStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(ReviewDispatchContext);
  const data = useContext(ReviewStateContext);
  const [curReviewItem, setCurReviewItem] = useState();

  const currentReviewItem = data.find(
    (item) => String(item.id) === String(params.id),
  );

  useEffect(() => {
    if (!currentReviewItem) {
      window.alert("존재하지 않는 리뷰입니다.");
      nav("/", { replace: true });
    }
  }, [currentReviewItem, nav]);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제할까요? 다시 복구되지 않습니다!")) {
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };

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
      <Header
        title={"리뷰 수정"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={currentReviewItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
