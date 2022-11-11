// 함수의 기능을 중간에 멈췄다가 재시작하는 기능
function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish";
}

const a = fn();
console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 2, done: false }
console.log(a.next()); // { value: 3, done: false }
console.log(a.next()); // { value: 'finish', done: false }
console.log(a.next()); // { value: undefined, done: true }

// 바로종료
a.return("END");

// Generator - iterable, iterator

// 스트링 iterable 테스트
const str = "hello";
const xx = str[Symbol.iterator]();
console.log(xx.next()); // { value: 'h', done: false }
console.log(xx.next()); // { value: 'e', done: false }
console.log(xx.next()); // { value: 'l', done: false }
console.log(xx.next()); // { value: 'l', done: false }
console.log(xx.next()); // { value: 'o', done: false }
console.log(xx.next()); // { value: undefined, done: false }
