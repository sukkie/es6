// 생성자 함수 사용
const User = function (name, age) {
  this.name = name;
  this.age = age;
  // 메소드는 객체 내부에 존재
  this.showName = function () {
    console.log(this.name);
  };
};
const mike = new User("Mike", 30);
console.log(mike); // User { name: 'Mike', age: 30, showName: [λ] }
console.log(mike.showName()); // Mike

// 클래스 사용
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 메소드는 __proto__ 내부에 존재
  showName() {
    console.log(this.name);
  }
}
const tom = new User2("Tom", 19);
console.log(tom); // User2 { name: 'Tom', age: 19 }
console.log(tom.showName()); // Tom

// 생성자 함수를 클래스처럼 만들기
{
  const User = function (name, age) {
    this.name = name;
    this.age = age;
  };
  User.prototype.showName = function () {
    console.log(this.name);
  };
  const mike = new User("Mike", 30);

  // 생성자 프로퍼티 출력
  for (const p in mike) {
    console.log(p); // name, age, showName
  }

  // 클래스 프로퍼티 출력 (클래스틑 함수는 안나옴)
  for (const p in tom) {
    console.log(p); // name, age
  }
}

// 상속
// 생성자 함수는 prototype을 이용해 상속 구현
// 클래스는 extends 키워드 이용
{
  class Car {
    constructor(color) {
      this.color = color;
      this.wheel = 4;
    }

    dirve() {
      console.log("drive..");
    }

    stop() {
      console.log("STOP!");
    }
  }

  class Bmw extends Car {
    park() {
      console.log("PARK");
    }
  }

  const z4 = new Bmw("blue");
  console.log(z4); // Bmw { color: 'blue', wheel: 4 }
  /**
  Bmw {color: 'blue', wheel: 4}
    color: "blue"
    wheel: 4
    [[Prototype]]: Car
    constructor: class Bmw
    park: ƒ park()
        [[Prototype]]: Object
        constructor: class Car
        dirve: ƒ dirve()
        stop: ƒ stop()
        [[Prototype]]: Object
 */
}

// 메소드 오버라이드
{
  class Car {
    constructor(color) {
      this.color = color;
      this.wheel = 4;
    }

    dirve() {
      console.log("drive..");
    }

    stop() {
      console.log("STOP!");
    }
  }

  class Bmw extends Car {
    constructor() {
      // 부모의 생성자 생성
      super();
      this.navigation = 1;
    }
    park() {
      console.log("PARK");
    }
    // 오버라이드
    stop() {
      // 부모의 stop호출
      super.stop();
      console.log("OFF");
    }
  }
}
