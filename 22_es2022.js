// ES2021
// 1. String.replaceAll
const str = "Hello World";
console.log(str.replaceAll("l", "~")); // He~~o Wor~d

// 2. Promise.any
// Promise.race()와 비슷하나 race는 가장 먼저 완료된 결과값을 리턴
// any는 가장 빠르게 이행된 프로미스를 반환함.

// 3. 논리연산자
function add(num1, num2) {
  num1 = num1 || 0; // 기본값으로 0을 설정
  num2 += 0; // 위 와같은 기본값을 0으로 설정
  console.log(num1 + num2);
}
