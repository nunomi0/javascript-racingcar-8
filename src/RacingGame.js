import { Car } from "./Car.js";
import { getRandomNumber } from "./utils/randomUtils.js";

export class RacingGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  playRound() {
    this.cars.forEach((car) => {
      const randomValue = getRandomNumber();
      if (car.canMove(randomValue)) {
        car.move();
      }
    })
  }
}