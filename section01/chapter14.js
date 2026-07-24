//1. 배열의 내장함수 forEach
const arr = [1,2,3,4]
const newArr = []

// for (const e of arr) {
//   console.log(e)
//   newArr.push(e*2)
// }

arr.forEach((e)=> {newArr.push(e*2)})
console.log(newArr)

//2. 배열의 내장함수 map => 새로운 내용을 배열로 리턴한다.
let newArr2 = arr.map((e)=> {return e*2})
console.log(newArr2)

//3. 배열의 내장함수 includes
let number = 3
let flag = false
arr.forEach((e)=>{
  if(e === number){
    flag = true
  }
})

console.log(flag)

console.log(arr.includes(number))

//4. 배열에서 찾고자하는 값의 인덱스를 출력 indexof
let index = -1
let count = 0
arr.forEach((e)=>{
  if (e === number) {
    index = count
  }
  count++
})
console.log(index)

console.log(arr.indexOf(number))

//5. 배열에서 찾고자하는 위치를 반환하는 메소드
let index1 = -1
let count1 = 0
arr.forEach((e)=>{
  if (e === number) {
    index1 = count1
  }
  count1++
})
console.log(index1)

let index2 = arr.findIndex((e)=> e === number)
console.log(index2)

const arr2 = [
  {color: "red"},
  {color: "blue"},
  {color: "yellow"},
  {color: "white"}
]

let index3 = -1
let count3 = 0

arr2.forEach((e)=> {
  if (e.color === "white") {
    index3 = count3
  }
  count3++
})
console.log(index3)
console.log(arr2[index3])

let index4 = arr2.findIndex((e)=>{return e.color === "white"})
console.log(arr2[index4])


//6. 배열에서 찾고자 하는 객체를 찾아서 해당된 객체를 리턴 find
const arr3 = [
  {color: "red"},
  {color: "blue"},
  {color: "yellow"},
  {color: "white"}
]

let findObject = null
arr3.forEach((e)=> {
  if (e.color === "white") {
    findObject = e
  }
})
console.log(findObject || "찾는 객체가 없음")

const findObject2 = arr3.find((e)=> {return e.color === "white"})
console.log(findObject2 || "찾는 객체가 없음")

//7. 배열에서 조건에 맞는객체를 필터링해서 리턴 filter
let arr4 = [ 
{ name: "김길동", hobby: "테니스" }, 
{ name: "이길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

const filterArray = []
arr4.forEach((e)=>{
  if (e.hobby === "테니스") {
    filterArray.push(e)
  }
})
console.log(filterArray)

console.log(arr4.filter((e)=>{return e.hobby === "테니스"}))

//8. map 배열의 모든 요소를 순회하면서 새로운배열을 생성해서 반환
let arr5 = [ 
{ name: "김길동", hobby: "테니스" }, 
{ name: "이길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

const nameArray = []
arr5.forEach((e, index, arr)=>{
  nameArray.push(e.hobby)
})
console.log(nameArray)

console.log(arr5.map((e)=> e.hobby))
console.log(arr5.map((e)=>{return {hobby: e.hobby}}))

//9. 배열 slice
let arr6 = [ 
{ name: "김길동", hobby: "테니스" }, 
{ name: "이길동", hobby: "테니스" }, 
{ name: "홍길동1", hobby: "독서1" }, 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }, 
{ name: "홍길동4", hobby: "독서4" }, 
];

const sliceArray =arr6.slice(0,3)
console.log(sliceArray)

//10. 배열 붙이는 방법 :  concat
let arr7 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
];

let arr8 = [
  { name: "홍길동3", hobby: "독서3" },
  { name: "홍길동4", hobby: "독서4" },
];

const concatArray = arr7.concat(arr8);
console.log(concatArray);

//11. 배열정렬 sort
let arr9 = ["나","가","라"]
// arr9.sort();
const sortArray = arr9.toSorted();
const sortArray2 = arr9.toSorted().reverse();
console.log(arr9)
console.log(sortArray)
console.log(sortArray2)

// 숫자배열을 정렬할때 주의
let arr10 = [0,1,3,2,10,30,20]
arr10.sort()
console.log(arr10)

arr10.sort((a,b)=>{
  if (a>b) {
    return 1
  }else if (a<b) {
    return -1
  }else{
    return 0
  }
})
console.log(arr10)

//12. 배열을 한개의 문자열로 만들기 join
const arr11 = ["홍길동","님","안녕하세요","반가워요"]; 
const joinString = arr11.join("/"); 
console.log(joinString);