import "./../css/Editor.css";
import Button from "../components/Button";
import EmotionItem from "../components/EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components/Editor.jsx: 리뷰 작성/수정 화면에서 공통으로 사용하는 입력 폼 컴포넌트
// props:
//   - initData: 수정할 기존 리뷰 데이터 (있으면 수정 모드, 없으면 작성 모드)
//   - onSubmit: 제출 버튼 클릭 시 실행할 함수 (입력 데이터를 받음)
//
// [주의] emotionList와 getStrDate 함수가 내부에 정의되어 있어서
//       util/constants.js와 util/get-stringed-date.js의 동일 로직과 중복됩니다 (리팩터링 대상)

const emotionList = [
  {
    emotionId: 1,
    emotionName: "(평점)5점",
  },
  {
    emotionId: 2,
    emotionName: "4점",
  },
  {
    emotionId: 3,
    emotionName: "3점",
  },
  {
    emotionId: 4,
    emotionName: "2점",
  },
  {
    emotionId: 5,
    emotionName: "1점",
  },
];

const getStrDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  // 폼 입력값을 관리하는 state
  // - createdDate: 리뷰 작성 날짜
  // - emotionId: 평점 (기본값 3 = 3점)
  // - content: 리뷰 텍스트
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate(); // 페이지 이동 함수

  // initData가 있으면(수정 모드) 폼을 기존 값으로 채웁니다
  useEffect(() => {
    if (initData) {
      setInput({
        createdDate: new Date(initData.createdDate),
        emotionId: initData.emotionId,
        content: initData.content,
      });
    }
  }, [initData]);


  // 폼 입력값 변경 핸들러
  // 날짜 입력은 문자열로 받아서 Date 객체로 변환하고,
  // 나머지는 그대로 state에 저장합니다
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  // 제출 버튼 클릭 시 현재 입력값을 부모 컴포넌트로 전달
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>리뷰 작성 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStrDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>평점</h4>
        <div className="emotion_list">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>영화 리뷰</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="영화 리뷰를 작성해주세요"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
