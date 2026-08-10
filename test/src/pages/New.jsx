import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ReviewDispatchContext } from "../App";

// pages/New.jsx: 새 영화 리뷰 작성 페이지
// Editor 컴포넌트에서 입력한 데이터를 받아 전역 상태에 추가합니다

const New = () => {
  // 전역 상태에서 리뷰 생성 함수를 가져옵니다
  const { onCreate } = useContext(ReviewDispatchContext);
  const nav = useNavigate(); // 페이지 이동 함수

  // Editor에서 데이터를 받으면 실행되는 콜백 함수
  const onSubmit = (input) => {
    // 입력된 데이터를 전역 상태에 추가
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 홈 페이지로 이동 (replace: true = 뒤로가기에서 이 페이지가 안 나타남)
    nav("/", { replace: true });
  };

  return (
    <div>
      {/* 헤더: 페이지 제목 + 뒤로 가기 버튼 */}
      <Header
        title={"새 영화 리뷰 작성"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      {/* 입력 폼 (수정 모드 아님) */}
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
