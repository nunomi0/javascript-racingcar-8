import { Car } from "../src/Car.js";

describe("Car 클래스", () => {
  test("자동차는 이름과 초기 위치를 가진다", () => {
    const car = new Car("pobi");

    expect(car.name).toBe("pobi");
    expect(car.position).toBe(0);
  });

  test("randomValue가 4인 경우 canMove는 true를 반환한다.", () => {
    const car = new Car("pobi");
    expect(car.canMove(4)).toBe(true);
  });

  test("randomValue가 3인 경우 canMove는 false를 반환한다.", () => {
    const car = new Car("pobi");
    expect(car.canMove(3)).toBe(false);
  });

  test("move()를 호출하면 position이 1 증가한다", () => {
    const car = new Car("pobi");
    car.move();

    expect(car.position).toBe(1);
  });

  test("move()를 여러 번 호출하면 그 횟수만큼 position이 증가한다", () => {
    const car = new Car("pobi");
    car.move();
    car.move();
    car.move();

    expect(car.position).toBe(3);
  });
});