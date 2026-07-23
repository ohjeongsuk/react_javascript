// 함수선언문(호이스팅)
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // sing()
    // dance()
    goodCallback()
  } else {
    // cry()
    badCallback()
  }
}

checkMood("good", ()=> console.log("노래 부르면서 춤을 춥니다."), ()=> console.log("기분이 안좋다."));

/*
// 함수선언문
function sing() {
  console.log("노래 부르기.")
}

let sing = ()=> console.log("노래 부르기.")

function cry() {
  console.log("노래를 부르지 못하여 울고있다.")
}

function dance() {
  console.log("춤을 추고 있다.")
}
*/

//2. 콜백함수 응용방법(리액트에서 자주 사용함)
function repeat(count, callback) {
  for (let index = 0; index < count; index++) {
    callback(index);
  }
}

repeat(5, (idx)=> console.log("ㅎㅇㅌ"+idx))