import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

// util/get-emotion-image.js: 평점 번호에 맞는 이미지 파일을 반환하는 순수 함수
// 예시: getEmotionImage(1) → emotion1.png의 경로 반환

export function getEmotionImage(emotionId) {
  // emotionId(1~5)에 따라 해당하는 감정 이미지 파일을 반환합니다
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
