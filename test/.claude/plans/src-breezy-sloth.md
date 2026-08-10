# src 폴더 전체에 초보자용 한국어 주석 추가

## Context
사용자는 리액트 학습/복습 목적으로 영화 리뷰(감정 아이콘 기반) 앱을 만들고 있으며, `src` 폴더의 코드를 초보자도 이해할 수 있도록 한국어 주석을 달아달라고 요청했습니다. 현재 `App.jsx`에 있는 주석 1줄(`// 새로운 영화리뷰 추가`)을 제외하면 19개 js/jsx 파일 전체에 주석이 전혀 없는 상태입니다. css 파일은 이번 작업에서 제외합니다.

## 대상 파일 (총 18개, css/이미지 제외)
```
src/
├── App.jsx                       (라우팅 + 전역 상태 관리 허브)
├── main.jsx                      (앱 진입점)
├── components/
│   ├── Button.jsx
│   ├── Editor.jsx
│   ├── EmotionItem.jsx
│   ├── Header.jsx
│   ├── ReviewItem.jsx
│   ├── ReviewList.jsx
│   ├── Updator.jsx                ← 빈 컴포넌트(미완성), 사실 그대로 주석
│   └── Viewer.jsx
├── hooks/
│   └── useReview.jsx
├── pages/
│   ├── Edit.jsx
│   ├── Home.jsx
│   ├── New.jsx
│   ├── NotFound.jsx
│   └── Review.jsx
└── util/
    ├── constants.js
    ├── get-emotion-image.js
    └── get-stringed-date.js
```

## 주석 작성 방침
- **모두 한국어**로 작성 (CLAUDE.md 규칙 준수).
- 파일 최상단에 1~3줄짜리 "이 파일이 하는 일" 요약 주석 추가 (예: `Editor.jsx` → "리뷰 작성/수정 화면에서 공통으로 쓰는 입력 폼 컴포넌트").
- import 구문에는 주석 달지 않음 (자명함).
- 각 함수/컴포넌트 선언부 위에 역할 설명 한 줄.
- state, useEffect, useReducer의 reducer, Context 등 **리액트 개념이 처음 등장하는 지점**에는 "왜 이걸 쓰는지"를 짧게 설명 (예: `useContext`가 왜 props drilling을 피하게 해주는지, `useReducer`의 action.type이 뭘 의미하는지).
- 코드 라인 자체가 자명한 경우(단순 JSX 마크업, 단순 변수 대입)는 주석 생략 — 과도한 라인별 주석은 오히려 가독성을 해침.
- 기존 동작을 변경하지 않음. 순수하게 주석만 추가하며, 로직/포맷팅은 건드리지 않음(단, 명백한 오탈자성 이슈는 주석으로만 언급하고 코드는 수정하지 않음 — 별도 승인 필요).
- `components/Updator.jsx`(빈 컴포넌트)와 `App.jsx`의 `Notfound` import 대소문자 불일치는 코드를 고치지 않고, 주석으로 "현재 비어있음/미사용" 등 사실만 짧게 남김.

## 파일별 핵심 설명 포인트

### App.jsx
- 라우팅 테이블 역할 설명 (`Routes`/`Route`)
- `mockData` = 초기 더미 데이터라는 것
- `reducer` 함수: action.type("CREATE"/"UPDATE"/"DELETE")별로 상태를 어떻게 갱신하는지
- `ReviewStateContext`/`ReviewDispatchContext`: Context를 왜 2개로 나눴는지(상태와 함수를 분리해 불필요한 리렌더 방지)
- `idRef`: useRef로 리렌더 없이 id 카운터 유지하는 이유

### main.jsx
- `createRoot`+`render`가 리액트 앱을 DOM에 붙이는 진입점이라는 것
- `BrowserRouter`로 감싸야 라우팅이 동작한다는 것

### components/Button.jsx, Header.jsx, EmotionItem.jsx
- props로 받는 값이 무엇이고 어떻게 쓰이는지 간단히

### components/Editor.jsx
- 작성/수정 겸용 폼이라는 것, `initData` 유무로 모드가 갈리는 점
- `useEffect`가 `initData` 변경 시 폼을 채우는 역할
- 내부 `emotionList`/`getStrDate`가 `util/`의 동일 로직과 중복된다는 점을 짧게 언급(사실 전달 목적, 리팩터링은 하지 않음)

### components/ReviewList.jsx, ReviewItem.jsx, Viewer.jsx
- 목록 정렬(`getSortedData`), 상세로 이동하는 핸들러, 상세 뷰 표시 방식

### components/Updator.jsx
- 현재 내용이 비어있는 미완성 컴포넌트라는 사실만 명시

### hooks/useReview.jsx
- 커스텀 훅이 하는 일(존재하지 않는 id 접근 시 알림+리다이렉트)
- 반환값이 없다는 점, 현재 어느 페이지에서도 사용되지 않는다는 점을 사실로만 언급

### pages/Home.jsx, New.jsx, Edit.jsx, Review.jsx, NotFound.jsx
- 각 페이지가 어떤 라우트에 대응하는지, `useParams`/`useNavigate` 등 라우터 훅의 역할
- `Home.jsx`의 월별 필터링(`pivotDate`, `getMonthlyData`) 로직 설명

### util/constants.js, get-emotion-image.js, get-stringed-date.js
- 순수 함수/상수 모음이라는 것, 각각 무엇을 반환하는지

## 진행 방식
1. `App.jsx`, `main.jsx`부터 주석 추가 (전역 구조 이해의 기준점)
2. `util/` 3개 파일 (다른 파일들이 참조하는 기반 유틸이라 먼저 처리)
3. `hooks/useReview.jsx`
4. `components/` 8개 파일
5. `pages/` 5개 파일
6. 전체 파일에 대해 빌드/동작에 영향 없는지 최종 확인 (`npm run dev` 또는 `npm run build`로 컴파일 에러 없는지 체크)

## 검증
- 주석 추가 후 `npm run build` (또는 `npm run dev` 실행 후 콘솔 에러 확인)로 문법 오류가 없는지 확인
- 각 파일에서 로직 변경이 없었는지 `git diff`로 주석 라인만 추가되었는지 확인
