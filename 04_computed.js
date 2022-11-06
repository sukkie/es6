// computed property
let a = "age";

const user = {
  name: "Mike",
  // 2개가 같음
  // computed property
  [a]: 30,
  age: 30,
};

// Object.assign() : 객체 복사
const user2 = {
  name: "Mike",
  age: 30,
};

// 첫번째 인자는 초기값, 두번째 인자는 복제대상 - 깊은 복사
const newUser = Object.assign({}, user2);

// 객체 프로퍼티의 키를 배열로 반환
console.log(Object.keys(user2)); // [ 'name', 'age' ]
// 객체 프로퍼티의 값을 배열로 반환
console.log(Object.values(user2)); // [ 'Mike', 30 ]
// 객체 프로퍼티의 키,값을 배열로 반환
const entUser = Object.entries(user2);
console.log(entUser); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]
// 키,값을 배열을 객체로 변환
console.log(Object.fromEntries(entUser)); // { name: 'Mike', age: 30 }
