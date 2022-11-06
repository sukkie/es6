// 객체 키는 문자형과 심볼만 가능
// 심볼을 객체에 사용하는 이유는 원본 객체는 그대로 두고 자신만의 심볼을 추가해서 원본 객체 수정으로 인한 영향범위를 없게 하기 위함
const a = Symbol(); // new를 붙이지 않는다

// 유일성 보장 - 설명을 추가 할 수 있음(설명은 심볼에 영향은 없음)
const id = Symbol("id");

// 예
const id2 = Symbol("id");
const user = {
  name: "Mike",
  age: 30,
  [id2]: "myid",
};

console.log(user); // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }

// 심볼형은 출력되지 않음
console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); //  [ 'Mike', 30 ]
console.log(Object.entries(user)); //  [ [ 'name', 'Mike' ], [ 'age', 30 ] ]

// 전역 심볼
// 하나의 심볼을 보장
// 없으면 만들고 있으면 가져옴
// 심볼을 공유하는 구조
const forId1 = Symbol.for("id");
const forId2 = Symbol.for("id");
console.log(forId1 == forId2); // true

// 전역심볼 이름 얻기
console.log(Symbol.keyFor(forId1)); // id
// 일반 심볼은 아래처럼 해야 이름 얻을 수 있음
const id3 = Symbol("id");
console.log(id3.description); // id

// 심볼보는 방법
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]
console.log(Reflect.ownKeys(user)); // [ 'name', 'age', Symbol(id) ]
