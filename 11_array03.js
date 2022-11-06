// 1. sort 재정렬
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 문자
let strArr = ["a", "c", "d", "e", "b"];
strArr.sort();
console.log(strArr); // [ 'a', 'b', 'c', 'd', 'e' ]

// 문자로 취급하므로 순서가 예상가 다름
let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2); // [ 13, 27, 5, 8 ]

// 비교하는 메소드를 넘겨줌
arr2.sort((v1, v2) => {
  // 양수, 음수, 0을 리턴하면 됨
  return v1 - v2;
});
console.log(arr2); // [ 5, 8, 13, 27 ]

// 2. 정렬은 Lodash라는 라이브러리를 많이 사용
// https://lodash.com/

// 3. reduce
// 합계 구하기
let arr3 = [1, 2, 3, 4, 5];
let result = 0;
arr3.forEach((v) => {
  result += v;
});
console.log(result); // 15

// reduce를 쓰면 한번에 계산 가능
// (누적된 계산값, 현재값) => {return 계산값}
const result2 = arr3.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result2); // 15

// reduce를 이용해서 성인만 취득 후 새배열로 리턴
let result3 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result3); // [ 'Mike', 'Jane', 'Sue', 'Harry', 'Steve' ]
