import { Car } from "./Car.js";
import { getRandomNumber } from "./utils/randomUtils.js";
import { printRoundResult } from "./output.js";

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
    });
    printRoundResult(this.cars);
  }

  play(tryCount) {
    for (let i = 0; i<tryCount; i++){
      this.playRound();
    }
  }

  getWinners() {
    const max = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === max)
      .map((car) => car.name);
  }
}