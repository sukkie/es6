// 1. forEach
let arr = ["Mike", "Tome", "Jane"];
arr.forEach((v, i) => console.log(`${v}, ${i + 1}`)); //Mike, 1, Tome, 2, Jane, 3

// 2. indexOf, lastIndexOf
let arr2 = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr2.indexOf(3)); // 2
console.log(arr2.indexOf(3, 3)); // 7
console.log(arr2.lastIndexOf(3)); // 7

// 3. include
console.log(arr2.includes(3)); // true
console.log(arr2.includes(6)); // false

// 4. find(하나 찾으면 종료), findIndex는 find와 비슷하나 차이점은 반환값이 배열의 index번호
const result = arr2.find((item) => item % 2 === 0);
const result2 = arr2.find((item) => {
  return item % 2 === 0;
});
// result, result2는 같음
console.log(result);
console.log(result2);

// find 객체타입인 경우
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];
const result3 = userList.find((user) => user.age < 19);
console.log(result3); // { name: 'Tom', age: 10 }

// 5. filter는 find와 비슷하나 전부 찾아 반환
const result4 = arr2.filter((item) => item % 2 === 0);
console.log(result4); // 2, 4, 2

// 6. reverse 역순 정렬

// 7. map 새로운 배열 반환
// 이 방식은 기존 userList배열에 수정을 가하는 구조임 - 비추
const userList2 = userList.map((user) => {
  if (user.age >= 19) {
    user.isAdult = true;
  } else {
    user.isAdult = false;
  }
  return user;
});
console.log(userList2); // [ { name: 'Mike', age: 30, isAdult: true }, { name: 'Jane', age: 27, isAdult: true }, { name: 'Tom', age: 10, isAdult: false } ]

// 이 방식은 기존 userList의 복사본을 만들어서 새롭게 추가하는 방식이어서 기존 userList에는 영향이 없음(테스트를 위해서 userList롤백할 것)
const userList3 = userList.map((user) => {
  return Object.assign({}, user, {
    isAdult: user.age >= 19,
  });
});
console.log(userList3); // [ { name: 'Mike', age: 30, isAdult: true }, { name: 'Jane', age: 27, isAdult: true },, { name: 'Tom', age: 10, isAdult: false } ]

// 8. join, split
let arr3 = ["안녕", "나는", "철수야"];
console.log(arr3.join()); //  안녕,나는,철수야 (기본 콤마)
console.log(arr3.join("-")); // 안녕-나는-철수야

// 9. split 문자를 배열로 만들어 줌

// 10. Array.isArray() 배열인지 체크
console.log(Array.isArray(arr3)); // true
// typeof는 배열,객체 구분 못함
console.log(typeof arr3); // object
