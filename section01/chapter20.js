// JSON.stringify => JSON 방식을 Str으로 변화

let object1 = { name: "제우스", age: 40 };
let object2 = { ...object1, hobby: "축구" };
let object3 = object1;

if (object1 === object2) {
  console.log("얕복");
} else {
  console.log("깊복");
}

console.log(JSON.stringify(object1) + "문자열");

if (JSON.stringify(object1) === JSON.stringify(object2)) {
  console.log("같은내용");
} else {
  console.log("다른내용");
}
