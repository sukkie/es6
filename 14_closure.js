// 어휘적 환경(Lexical Environment) : function이나 선언된 변수가 초기에 호이스팅되서 올라가는 전역환경
// 내부 Lexical Environment, 외부 Lexical Environment, 전역 Lexical Environment
// 클로저(closure) : 함수와 렉시컬 환경의 조합, 함수가 셩성될 당시의 외부 변수를 기억하고 생성된 이후에도 계속 접근 가능

// 예제1.
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2));

const add10 = makeAdder(10);
console.log(add10(5));
// add10이 호출되도 add3은 makeAdder의 Lexical환경의 x변수의 값(3)을 기억하고 있음.
console.log(add3(1));

// 예제2.
function makeCounter(x) {
  let num = 0; // 은닉화
  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.info(counter());
console.info(counter());
console.info(counter());
