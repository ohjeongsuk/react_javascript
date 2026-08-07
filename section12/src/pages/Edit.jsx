import { useNavigate, useParams } from "react-router-dom";
import Header from "./../components/Header";
import Button from "./../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useContext, useEffect, useRef } from "react";

const Edit = () => {
  const isDeleting = useRef(false);
  const params = useParams();
  const nav = useNavigate();

  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  // 1. 일기 데이터 찾기
  const currentDiaryItem = data?.find(
    (item) => String(item.id) === String(params.id)
  );

  // 2. 삭제 처리 함수
  const onClickDel = () => {
    if (window.confirm("일기를 삭제할까요? 다시 복구되지 않습니다.")) {
      isDeleting.current = true;
      nav("/", { replace: true });
      onDelete(params.id);
    }
  };

  // 3. 잘못된 접근(없는 ID)일 경우 경고창 후 홈으로 이동
  useEffect(() => {
    if (isDeleting.current) return;
    if (data && data.length > 0 && !currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [data, currentDiaryItem, nav]);

  // 데이터가 아직 없으면 로딩 표시
  if (!currentDiaryItem) {
    return <div>로딩중입니다...</div>;
  }

  // 4. 정상 렌더링
  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        title={"일기 수정"}
        rightChild={
          <Button text={"삭제"} type={"NEGATIVE"} onClick={onClickDel} />
        }
      />
      <Editor onUpdate={onUpdate} initData={currentDiaryItem} />
    </div>
  );
};

export default Edit;