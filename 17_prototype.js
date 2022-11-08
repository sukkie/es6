const user = {
  name: "Mike",
};

// property존재 체크
console.log(user.hasOwnProperty("name"));
console.log("name" in user);

// __proto__(이게 property)
// 객체의 프로퍼티를 호출하면 현재 객체내의 프로퍼티를 조회하고 없으면 __proto__에서 찾음.

// 상속 예제
const car = {
  wheels: 4,
  driver() {
    console.log("drive..");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

// 상속설정
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(benz.wheels); // 4

// prototype체인 : 자신의 프로퍼티에 없으면 부모 프로퍼티를 검색, 또 없으면 그 위에 부모 검색

for (p in bmw) {
  console.log(p); // color navigation wheels driver (부모의 프로퍼티까지 출력)
}

// 자신의 프로퍼티만 나옴
console.log(Object.keys(bmw)); // [ 'color', 'navigation' ]

// 생성자 함수를 이용한 예
{
  const Bmw = function (color) {
    this.color = color;
  };
  Bmw.prototype.wheels = 4;
  Bmw.prototype.drive = function () {
    console.log("drive..");
  };

  const x5 = new Bmw("red");
  const z4 = new Bmw("blue");

  console.log(x5); // { color: 'red' }
  console.log(z4.wheele); // { color: 'red' }
}
