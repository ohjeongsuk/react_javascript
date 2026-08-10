// pages/NotFound.jsx: 404 페이지 (존재하지 않는 URL에 접근했을 때)
// App.jsx의 Route path="*"에 매칭됩니다

const NotFound = () => {
  return (
    <div>
      <h1>NotFound</h1>
      {/* 페이지를 찾을 수 없다는 메시지를 표시합니다 */}
    </div>
  );
};

export default NotFound;
