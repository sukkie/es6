// 예제1
let list = [
  "01. 들어가며",
  "02. JS 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

// 번호만 출력
for (let v of list) {
  console.log(parseInt(v));
}

// 스트링만 출력
for (let v of list) {
  console.log(v.slice(4));
}

// 예제2
function hasCola(str) {
  if (str.includes("콜라")) {
    console.log("있음");
  } else {
    console.log("없음");
  }
}

hasCola("콜라");
hasCola("사이다");
