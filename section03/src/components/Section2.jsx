import "../css/Section.css";

const Section2 = () => {
  const user = {
    name: "zeus",
    isLogin: true
  };

  return (
    <div>
      {user.isLogin === true ?
        <div className="logstyle"> {user.name}로그아웃~ </div> :
        <div className="logstyle"> {user.name}로그인~ </div>
      }
    </div>
  );
};
export default Section2;