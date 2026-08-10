import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Review from "./pages/Review";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { useReducer, useRef, createContext } from "react";

// 이 파일은 영화 리뷰 앱의 최상위 컴포넌트입니다.
// - 전체 라우팅(화면 전환)을 관리합니다
// - Context API로 리뷰 데이터를 전역 상태로 관리하고, 모든 하위 컴포넌트에 공유합니다
// - useReducer로 리뷰 CRUD(생성, 수정, 삭제) 기능을 구현합니다

// 앱 시작 시 미리 정해진 3개의 테스트 리뷰 데이터
const mockData = [
  {
    id: 1,
    createdDate: new Date("2026-08-19").getTime(),
    emotionId: 1,
    content: "1번 영화 리뷰",
  },
  {
    id: 2,
    createdDate: new Date("2026-08-18").getTime(),
    emotionId: 2,
    content: "2번 영화 리뷰",
  },
  {
    id: 3,
    createdDate: new Date("2026-01-10").getTime(),
    emotionId: 3,
    content: "3번 영화 리뷰",
  },
];

// useReducer의 reducer 함수: action.type에 따라 리뷰 목록 state를 업데이트합니다
// - CREATE: 새 리뷰를 목록 맨 앞에 추가
// - UPDATE: 기존 리뷰를 찾아 내용 수정
// - DELETE: 해당 id의 리뷰를 목록에서 제거
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

// Context: Props 전달 없이 전역으로 리뷰 데이터를 공유하기 위한 Context
// 상태(data)와 함수(dispatch)를 별도로 만드는 이유는 불필요한 리렌더를 줄이기 위함입니다
export const ReviewStateContext = createContext();
export const ReviewDispatchContext = createContext();

function App() {
  // useReducer: state(리뷰 목록)와 dispatcher(액션 실행 함수)를 관리
  // mockData를 초기값으로 사용합니다
  const [data, dispatch] = useReducer(reducer, mockData);

  // useRef: 리렌더되어도 값을 유지하는 변수
  // 리뷰 id를 자동으로 증가시키는데, 리렌더될 때마다 초기화되지 않도록 ref 사용
  const idRef = useRef(3);

  // 디스패치 함수들: 리뷰 데이터를 변경하는 액션을 실행합니다
  // 새로운 영화리뷰 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* Context.Provider로 감싸서 모든 하위 컴포넌트가 상태와 함수에 접근할 수 있게 합니다 */}
      <ReviewStateContext.Provider value={data}>
        <ReviewDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          {/* Routes: 경로(path)에 따라 다른 컴포넌트를 렌더합니다 (페이지 전환) */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/review/:id" element={<Review />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </ReviewDispatchContext.Provider>
      </ReviewStateContext.Provider>
    </>
  );
}
export default App;
